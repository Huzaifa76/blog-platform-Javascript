let title = document.getElementById("blog_title");
let description = document.getElementById("blog_desc");
let imgInput = document.getElementById("blog_img");
let content = document.querySelector(".content");
let image = document.querySelector(".image");
let data= document.querySelector(".data-inner");

function submitBlog() {
    if (title.value === "" || description.value === "") {
        alert("Please enter title and description");
    } else if (imgInput.files.length === 0) {
        alert("Please select an image");
    } else {
        let div1 = document.createElement("div");
        div1.classList.add("main_div");
        let div2 = document.createElement("div");
        div2.classList.add("child_div");
        let newTitle = document.createElement("h2");
        let newDes = document.createElement("p");
        let newImg = document.createElement("img");

        newTitle.textContent = title.value;
        newDes.innerHTML = `${description.value} <div><i class="fa fa-trash-o" id="del" style="font-size:20px;color:black"></i> <i class="fa fa-edit" id="edit" style="font-size:20px;color:black"></i></div>`;

        let file = imgInput.files[0];
        let reader = new FileReader();
        reader.onload = function(event) {
            newImg.src = event.target.result;
            newImg.alt = "Blog Image";
        };

        reader.readAsDataURL(file);

        div1.appendChild(newImg);
        div2.appendChild(newTitle);
        div2.appendChild(newDes);

        data.appendChild(div1);
        div1.appendChild(div2);

        // content.appendChild(newTitle);
        // content.appendChild(newDes);
        // image.appendChild(newImg);
        title.value = "";
        description.value = "";
        
        newDes.querySelector("#del").addEventListener("click", del);
        newDes.querySelector("#edit").addEventListener("click", edit);

        function del() {
            let confirmDelete = confirm("Are you sure you want to remove this task?");
            if (confirmDelete) {
                div1.remove();
                // newDes.remove();
                // newTitle.remove();
            }
        }

        function edit() {
            let editedTitle = prompt("Edit your Title:", newTitle.textContent);
            if (editedTitle !== null && editedTitle !== "") {
                newTitle.textContent = editedTitle;
            } else {
                return;
            }

            let currentTask = newDes.firstChild.nodeValue.trim();
            let editedTask = prompt("Edit your Description:", currentTask);
            if (editedTask !== null && editedTask !== "") {
                newDes.firstChild.nodeValue = editedTask;
            }
        }
    }
}