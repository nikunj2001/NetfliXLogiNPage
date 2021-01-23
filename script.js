
const users=['nikunj','poorvi','nitin'];
const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.getElementById('addIcon');




const userIcon=()=>{
    users.reverse();
    
    users.map((curElem)=>{
        memberDiv.insertAdjacentHTML('afterbegin',`
                <button class="btn"><span>${curElem}</span></button>
        `)
    })
}


addIcon.addEventListener('click',()=>{
    let userNAme = prompt('please enter your name')
    if(userNAme!==null && !(users.includes(userNAme))){
        users.push(userNAme)
        memberDiv.insertAdjacentHTML('afterbegin',`
                <button class="btn"><span>${userNAme}</span></button>
        `)
    }else{
        alert("userNAme already exist")
    }
})
        userIcon();
