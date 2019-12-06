// 登录
// document.querySelector('#username').addEventListener('blur',checkName);
function checkName() {
    let inputValue = document.getElementsByName("username")[0].value;
    ajax({
        url: "/checkName",
        method: "post",
        data: {
            username: inputValue
        },
        success: function (res) {
            document.querySelector(".exchange").innerHTML = res.info;
            if (res.status == 1) {
                document.querySelector(".exchange").style.color = "green";
            } else {
                document.querySelector(".exchange").style.color = "red";
            }
        }
    })

}



// 展示
let photoContainer = document.querySelector('.photoContainer');
let photoTitle = document.querySelector('.photoTitle');


let imgsArr = [];
window.onload = getPhoto;
// 获取当前用户所有图片
function getPhoto() {
    ajax({
        url: '/getImageData',
        success: function (res) {
            imgsArr = res;
            photoContainer.innerHTML = res.map(v => `
                <div class="photoItem">
                    <img src="${v.imgUrl}">
                    <span>${v.imgName}</span>
                </div>`).join('');

            let photoItem = document.querySelectorAll('.photoItem img');
            let photoScroll = document.querySelector('.photoScroll');
            let figure = document.querySelector('.figure img');
            let group = document.querySelector('.group');
            photoItem.forEach((v,k)=>{
                v.addEventListener('click',()=>{
                    figure.setAttribute('src',v.getAttribute('src'));

                    group.innerHTML = res.map((v,i)=>`
                            <li class=${k==i?'active':''}><img src="${v.imgUrl}" alt=""></li>
                        `
                    )

                    photoScroll.style.display = 'block'
                })
            })
            
        }
    })
}



// 上传

let uploadArr = [];
document.querySelector(".masking .close").addEventListener('click', () => {
    document.querySelector(".masking").style.display = "none";
    getPhoto();
})
document.querySelector(".mybtn").onclick = function () {
    document.querySelector(".masking").style.display = "block";
}


document.querySelector(".imgFile").onchange = function () {
    //获取文件
    console.log(this.files);
    document.querySelector(".uploadContainer").style.display = "none";
    document.querySelector(".loadContainer").style.display = "block";
    Array.from(this.files).forEach(file => {
        let uploadItems = new uploadItem(file);
        uploadArr.push(uploadItems);
        uploadItems.createHtml();
    })
}

document.querySelector(".imgFile-add").onchange = function () {
    Array.from(this.files).forEach(file => {
        let uploadItems = new uploadItem(file);
        uploadArr.push(uploadItems);
        uploadItems.createHtml();
    })
}

// 点击上传
document.querySelector(".uploadBtn").onclick = function () {
    async function quere() {
        for (let i = 0; i < uploadArr.length; i++) {
            await uploadArr[i].uploadImg();
        }
    }
    quere();
    getPhoto();
}


class uploadItem {
    constructor(file) {
        this.file = file;
        this.ele = "";
    }
    createHtml() {
        let uploadPhotoItem = document.createElement("div");
        uploadPhotoItem.classList.add("uploadPhotoItem");
        let fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        let _this = this;
        fileReader.onload = function () {
            // console.log(fileReader.result);
            uploadPhotoItem.innerHTML = `
                        <span class="myProgress">
                            <span class="plan"></span>
                            <span class='percent'>30%</span>
                        </span>
                        <img src="${fileReader.result}" />
                        <span class="pictureName">
                            ${_this.file.name}
                        </span>
        `;
            _this.ele = uploadPhotoItem;
            document.querySelector(".wantUpload").appendChild(uploadPhotoItem);
        }
    }
    uploadImg() {
        return new Promise(resolve => {
            let xhr = new XMLHttpRequest();
            xhr.open("post", "/upload", true);
            let form = new FormData();
            form.append("img", this.file);
            xhr.upload.onprogress = (evt) => {
                console.log(evt)
                // evt.loaded 
                // evt.total;
                let percent = Math.round(evt.loaded / evt.total * 100);
                console.log(percent);
                this.ele.querySelector(".myProgress").style.display = "block";
                this.ele.querySelector(".plan").style.width = percent + "%";
                this.ele.querySelector(".percent").innerHTML = percent + "%";
            }
            xhr.upload.onload = function () {
                resolve();
            }
            xhr.send(form);
        })

    }


}


// 轮播
let group = document.querySelector('.group');
if(group){
    group.addEventListener('click', (e) => {
        let lis = document.querySelectorAll('.group li');
        lis.forEach(v => v.className = '')
        if(e.target.tagName ==='IMG'){
            e.target.parentNode.className = 'active';
            document.querySelector('.figure img').setAttribute('src', e.target.getAttribute('src'));
        }
    });
    document.querySelector('.photoScroll .close').addEventListener('click', () => {
        document.querySelector('.photoScroll').style.display = 'none';
    });
}





// ajax
function ajax(options) {
    let opts = Object.assign({
        method: "get",
        url: "",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: {},
        success: function () {}
    }, options)
    let xhr = new XMLHttpRequest();
    // name=zhangsan&age=20; {name:zhangsan,age:20}
    if (opts.method.toLowerCase() === "get") {
        opts.url = opts.url + "?" + o2u(opts.data);
    }
    xhr.open(opts.method, opts.url, true);
    for (let i in opts.headers) {
        xhr.setRequestHeader(i, opts.headers[i]);
    }

    xhr.onload = function () {
        let responseData;
        if (xhr.getResponseHeader("content-type").includes("xml")) {
            responseData = xhr.responseXML;
        } else {
            responseData = JSON.parse(xhr.responseText);
        }
        opts.success(responseData);
    }
    if (opts.method.toLowerCase() === "get") {
        xhr.send();
    } else {
        let sendData;
        switch (opts.headers['content-type']) {
            case 'application/x-www-form-urlencoded':
                sendData = o2u(opts.data);
                break;
            case 'application/json':
                sendData = JSON.stringify(opts.data);
                break;
        }
        xhr.send(sendData);
    }
    // console.log(o2u({ name: "zhangsan", age: 20 }));
    function o2u(obj) {
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        return keys.map((v, k) => {
            // name=zhangsan
            // age=20;
            return `${v}=${values[k]}`
        }).join("&")
    }
}