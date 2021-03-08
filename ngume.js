var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var packages = document.querySelectorAll(".packages-section");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < packages.length; i++) {
  packages[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
modalNoButton.addEventListener("click", function(){
    modal.style.display="none";
})

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
