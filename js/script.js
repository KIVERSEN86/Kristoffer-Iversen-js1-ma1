// Question 1

const cat = {
    complain: function() {
        console.log("Meow");
    }
}

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const allParagraphs = document.querySelectorAll("p");

for(let i = 0; i < allParagraphs.length; i++) {

    allParagraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catFunction(list) {

    for(let i = 0; i < list.length; i++) {

        console.log(list[i].name);

    }

}

catFunction(cats);

// Question 8

function createCats(cats) {

    let htmlContainer = "";

    for(let i = 0; i < cats.length; i++) {

        let ageMissing = "Age unknown";

        if(cats[i].age) {
                ageMissing = cats[i].age;
        }

        htmlContainer += `<div>
        <h5>Name: ${cats[i].name}</h5>
        <p>Age: ${ageMissing}</p></div>`;

    }

    return htmlContainer;
}

const addedHtml = createCats(cats);

const addedContainer = document.querySelector(".cat-container");
addedContainer.innerHTML = addedHtml;




