let leftBox = document.getElementById("left");
let middleBox = document.getElementById("middle");
let rightBox = document.getElementById("right");
let lists = document.querySelectorAll(".list");

// console.log(lists, rightBox, leftBox);

lists.forEach((list) => {
  list.addEventListener("dragstart", function (e) {
    console.log(e);
    let selectedItem = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selectedItem);

      selectedItem = null;
    });

    // leftBox

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selectedItem);

      selectedItem = null;
    });

    // middleBox

    middleBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    middleBox.addEventListener("drop", function (e) {
      middleBox.appendChild(selectedItem);

      selectedItem = null;
    });
  });
});
