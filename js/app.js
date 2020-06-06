/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const activeSection = 'your-active-class';
const activeNavItem = 'your-active-nav-item';
let activeClassSet = 0;
const content = {
  sections: [{
    id: 'section1',
    navname: 'Section #1',
    class: activeSection,
    title: 'Section 1',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dolor purus. Mauris rutrum arcu nisl, vitae convallis ipsum lobortis id. Cras convallis eleifend ex, sed pellentesque urna posuere ac. Vestibulum at laoreet lorem. Nulla facilisi. Aliquam ac placerat ipsum. Pellentesque congue nunc lacus, sed sollicitudin metus consectetur nec. Phasellus sit amet rhoncus ante. In hac habitasse platea dictumst. Fusce eleifend sit amet elit quis vehicula. Duis mollis, erat eget hendrerit tempus, quam tortor venenatis ipsum, sit amet viverra neque lectus eget felis. Cras turpis enim, vulputate eu ante nec, dignissim hendrerit ex. Aliquam consequat magna diam, et viverra odio consequat nec. Donec mollis libero nec velit feugiat vehicula.',
    paragraph2: 'Maecenas eget felis est. Nam quis enim et sem fringilla convallis. Suspendisse potenti. Integer et feugiat velit, nec tincidunt odio. Proin viverra, erat et sollicitudin varius, dolor sem blandit justo, at ultricies ex sapien eu mi. Duis vitae dui maximus dolor ultrices pulvinar. Sed sagittis malesuada commodo. Vivamus vitae nunc eu mi aliquet maximus a in est. Vivamus pharetra a velit eget tincidunt. Nam consectetur suscipit fermentum. Nam elit dui, ornare non lacinia non, aliquam id est. Phasellus quam neque, vestibulum nec tortor eget, porttitor facilisis sapien. Praesent aliquam a arcu ac aliquet. Suspendisse ultrices lacinia mattis.',
    paragraph3: 'Nam auctor urna pellentesque, tincidunt ipsum at, placerat ipsum. Nullam sit amet purus nec massa tincidunt finibus sed at mi. Morbi tempus, nunc a pulvinar sagittis, mauris nisl pharetra arcu, a pulvinar risus quam mattis enim. Quisque hendrerit ex vel lorem ullamcorper dictum sed eu mauris. Donec sollicitudin dolor sem, vel rhoncus purus laoreet at. Donec quis mollis purus, eget mollis neque. Ut eget nibh quis dui dictum ornare non et leo. Praesent tristique tortor sed erat bibendum lobortis. Etiam molestie augue a lorem bibendum euismod. Sed quis nulla id felis hendrerit malesuada. Proin ac mi in ipsum sodales dignissim vel non dolor. Proin quis dolor rutrum, vulputate diam non, tempus elit. Phasellus lorem leo, gravida eget luctus dictum, commodo non libero. Aenean dapibus orci in nisi iaculis tincidunt. Aenean eu lacus in sem tincidunt bibendum faucibus id orci. Phasellus fermentum augue ex, nec condimentum sapien commodo vitae.'
  },
  {
    id: 'section2',
    navname: 'Section #2',
    class: '',
    title: 'Section 2',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dolor purus. Mauris rutrum arcu nisl, vitae convallis ipsum lobortis id. Cras convallis eleifend ex, sed pellentesque urna posuere ac. Vestibulum at laoreet lorem. Nulla facilisi. Aliquam ac placerat ipsum. Pellentesque congue nunc lacus, sed sollicitudin metus consectetur nec. Phasellus sit amet rhoncus ante. In hac habitasse platea dictumst. Fusce eleifend sit amet elit quis vehicula. Duis mollis, erat eget hendrerit tempus, quam tortor venenatis ipsum, sit amet viverra neque lectus eget felis. Cras turpis enim, vulputate eu ante nec, dignissim hendrerit ex. Aliquam consequat magna diam, et viverra odio consequat nec. Donec mollis libero nec velit feugiat vehicula.',
    paragraph2: 'Maecenas eget felis est. Nam quis enim et sem fringilla convallis. Suspendisse potenti. Integer et feugiat velit, nec tincidunt odio. Proin viverra, erat et sollicitudin varius, dolor sem blandit justo, at ultricies ex sapien eu mi. Duis vitae dui maximus dolor ultrices pulvinar. Sed sagittis malesuada commodo. Vivamus vitae nunc eu mi aliquet maximus a in est. Vivamus pharetra a velit eget tincidunt. Nam consectetur suscipit fermentum. Nam elit dui, ornare non lacinia non, aliquam id est. Phasellus quam neque, vestibulum nec tortor eget, porttitor facilisis sapien. Praesent aliquam a arcu ac aliquet. Suspendisse ultrices lacinia mattis.',
    paragraph3: 'Nam auctor urna pellentesque, tincidunt ipsum at, placerat ipsum. Nullam sit amet purus nec massa tincidunt finibus sed at mi. Morbi tempus, nunc a pulvinar sagittis, mauris nisl pharetra arcu, a pulvinar risus quam mattis enim. Quisque hendrerit ex vel lorem ullamcorper dictum sed eu mauris. Donec sollicitudin dolor sem, vel rhoncus purus laoreet at. Donec quis mollis purus, eget mollis neque. Ut eget nibh quis dui dictum ornare non et leo. Praesent tristique tortor sed erat bibendum lobortis. Etiam molestie augue a lorem bibendum euismod. Sed quis nulla id felis hendrerit malesuada. Proin ac mi in ipsum sodales dignissim vel non dolor. Proin quis dolor rutrum, vulputate diam non, tempus elit. Phasellus lorem leo, gravida eget luctus dictum, commodo non libero. Aenean dapibus orci in nisi iaculis tincidunt. Aenean eu lacus in sem tincidunt bibendum faucibus id orci. Phasellus fermentum augue ex, nec condimentum sapien commodo vitae.'
  },
  section3 = {
    id: 'section3',
    navname: 'Section #3',
    class: '',
    title: 'Section 3',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dolor purus. Mauris rutrum arcu nisl, vitae convallis ipsum lobortis id. Cras convallis eleifend ex, sed pellentesque urna posuere ac. Vestibulum at laoreet lorem. Nulla facilisi. Aliquam ac placerat ipsum. Pellentesque congue nunc lacus, sed sollicitudin metus consectetur nec. Phasellus sit amet rhoncus ante. In hac habitasse platea dictumst. Fusce eleifend sit amet elit quis vehicula. Duis mollis, erat eget hendrerit tempus, quam tortor venenatis ipsum, sit amet viverra neque lectus eget felis. Cras turpis enim, vulputate eu ante nec, dignissim hendrerit ex. Aliquam consequat magna diam, et viverra odio consequat nec. Donec mollis libero nec velit feugiat vehicula.',
    paragraph2: 'Maecenas eget felis est. Nam quis enim et sem fringilla convallis. Suspendisse potenti. Integer et feugiat velit, nec tincidunt odio. Proin viverra, erat et sollicitudin varius, dolor sem blandit justo, at ultricies ex sapien eu mi. Duis vitae dui maximus dolor ultrices pulvinar. Sed sagittis malesuada commodo. Vivamus vitae nunc eu mi aliquet maximus a in est. Vivamus pharetra a velit eget tincidunt. Nam consectetur suscipit fermentum. Nam elit dui, ornare non lacinia non, aliquam id est. Phasellus quam neque, vestibulum nec tortor eget, porttitor facilisis sapien. Praesent aliquam a arcu ac aliquet. Suspendisse ultrices lacinia mattis.',
    paragraph3: 'Nam auctor urna pellentesque, tincidunt ipsum at, placerat ipsum. Nullam sit amet purus nec massa tincidunt finibus sed at mi. Morbi tempus, nunc a pulvinar sagittis, mauris nisl pharetra arcu, a pulvinar risus quam mattis enim. Quisque hendrerit ex vel lorem ullamcorper dictum sed eu mauris. Donec sollicitudin dolor sem, vel rhoncus purus laoreet at. Donec quis mollis purus, eget mollis neque. Ut eget nibh quis dui dictum ornare non et leo. Praesent tristique tortor sed erat bibendum lobortis. Etiam molestie augue a lorem bibendum euismod. Sed quis nulla id felis hendrerit malesuada. Proin ac mi in ipsum sodales dignissim vel non dolor. Proin quis dolor rutrum, vulputate diam non, tempus elit. Phasellus lorem leo, gravida eget luctus dictum, commodo non libero. Aenean dapibus orci in nisi iaculis tincidunt. Aenean eu lacus in sem tincidunt bibendum faucibus id orci. Phasellus fermentum augue ex, nec condimentum sapien commodo vitae.'
  },
  section4 = {
    id: 'section4',
    navname: 'Section #4',
    class: '',
    title: 'Section 4',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dolor purus. Mauris rutrum arcu nisl, vitae convallis ipsum lobortis id. Cras convallis eleifend ex, sed pellentesque urna posuere ac. Vestibulum at laoreet lorem. Nulla facilisi. Aliquam ac placerat ipsum. Pellentesque congue nunc lacus, sed sollicitudin metus consectetur nec. Phasellus sit amet rhoncus ante. In hac habitasse platea dictumst. Fusce eleifend sit amet elit quis vehicula. Duis mollis, erat eget hendrerit tempus, quam tortor venenatis ipsum, sit amet viverra neque lectus eget felis. Cras turpis enim, vulputate eu ante nec, dignissim hendrerit ex. Aliquam consequat magna diam, et viverra odio consequat nec. Donec mollis libero nec velit feugiat vehicula.',
    paragraph2: 'Maecenas eget felis est. Nam quis enim et sem fringilla convallis. Suspendisse potenti. Integer et feugiat velit, nec tincidunt odio. Proin viverra, erat et sollicitudin varius, dolor sem blandit justo, at ultricies ex sapien eu mi. Duis vitae dui maximus dolor ultrices pulvinar. Sed sagittis malesuada commodo. Vivamus vitae nunc eu mi aliquet maximus a in est. Vivamus pharetra a velit eget tincidunt. Nam consectetur suscipit fermentum. Nam elit dui, ornare non lacinia non, aliquam id est. Phasellus quam neque, vestibulum nec tortor eget, porttitor facilisis sapien. Praesent aliquam a arcu ac aliquet. Suspendisse ultrices lacinia mattis.',
    paragraph3: 'Nam auctor urna pellentesque, tincidunt ipsum at, placerat ipsum. Nullam sit amet purus nec massa tincidunt finibus sed at mi. Morbi tempus, nunc a pulvinar sagittis, mauris nisl pharetra arcu, a pulvinar risus quam mattis enim. Quisque hendrerit ex vel lorem ullamcorper dictum sed eu mauris. Donec sollicitudin dolor sem, vel rhoncus purus laoreet at. Donec quis mollis purus, eget mollis neque. Ut eget nibh quis dui dictum ornare non et leo. Praesent tristique tortor sed erat bibendum lobortis. Etiam molestie augue a lorem bibendum euismod. Sed quis nulla id felis hendrerit malesuada. Proin ac mi in ipsum sodales dignissim vel non dolor. Proin quis dolor rutrum, vulputate diam non, tempus elit. Phasellus lorem leo, gravida eget luctus dictum, commodo non libero. Aenean dapibus orci in nisi iaculis tincidunt. Aenean eu lacus in sem tincidunt bibendum faucibus id orci. Phasellus fermentum augue ex, nec condimentum sapien commodo vitae.'
  },
  section5 = {
    id: 'section5',
    navname: 'Section #5',
    class: '',
    title: 'Section 5',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dolor purus. Mauris rutrum arcu nisl, vitae convallis ipsum lobortis id. Cras convallis eleifend ex, sed pellentesque urna posuere ac. Vestibulum at laoreet lorem. Nulla facilisi. Aliquam ac placerat ipsum. Pellentesque congue nunc lacus, sed sollicitudin metus consectetur nec. Phasellus sit amet rhoncus ante. In hac habitasse platea dictumst. Fusce eleifend sit amet elit quis vehicula. Duis mollis, erat eget hendrerit tempus, quam tortor venenatis ipsum, sit amet viverra neque lectus eget felis. Cras turpis enim, vulputate eu ante nec, dignissim hendrerit ex. Aliquam consequat magna diam, et viverra odio consequat nec. Donec mollis libero nec velit feugiat vehicula.',
    paragraph2: 'Maecenas eget felis est. Nam quis enim et sem fringilla convallis. Suspendisse potenti. Integer et feugiat velit, nec tincidunt odio. Proin viverra, erat et sollicitudin varius, dolor sem blandit justo, at ultricies ex sapien eu mi. Duis vitae dui maximus dolor ultrices pulvinar. Sed sagittis malesuada commodo. Vivamus vitae nunc eu mi aliquet maximus a in est. Vivamus pharetra a velit eget tincidunt. Nam consectetur suscipit fermentum. Nam elit dui, ornare non lacinia non, aliquam id est. Phasellus quam neque, vestibulum nec tortor eget, porttitor facilisis sapien. Praesent aliquam a arcu ac aliquet. Suspendisse ultrices lacinia mattis.',
    paragraph3: 'Nam auctor urna pellentesque, tincidunt ipsum at, placerat ipsum. Nullam sit amet purus nec massa tincidunt finibus sed at mi. Morbi tempus, nunc a pulvinar sagittis, mauris nisl pharetra arcu, a pulvinar risus quam mattis enim. Quisque hendrerit ex vel lorem ullamcorper dictum sed eu mauris. Donec sollicitudin dolor sem, vel rhoncus purus laoreet at. Donec quis mollis purus, eget mollis neque. Ut eget nibh quis dui dictum ornare non et leo. Praesent tristique tortor sed erat bibendum lobortis. Etiam molestie augue a lorem bibendum euismod. Sed quis nulla id felis hendrerit malesuada. Proin ac mi in ipsum sodales dignissim vel non dolor. Proin quis dolor rutrum, vulputate diam non, tempus elit. Phasellus lorem leo, gravida eget luctus dictum, commodo non libero. Aenean dapibus orci in nisi iaculis tincidunt. Aenean eu lacus in sem tincidunt bibendum faucibus id orci. Phasellus fermentum augue ex, nec condimentum sapien commodo vitae.'
  }
  ],
  /**
  * End Global Variables
  * Start Helper Functions
  * 
  */
  insertSection(section) {
    const htmlSection =
      `<section id="${section.id}" data-sectionname="${section.navname}" class="${section.class}">
              <div class ="landing__container">
              <h2>${section.title}</h2>
              <p>${section.paragraph1}</p>
              <p>${section.paragraph2}</p>
              <p>${section.paragraph3}</p>
              </div>
          </section>`;
    return htmlSection;
  },
  [Symbol.iterator]() {
    let counter = 0;
    return {
      next() {
        if (counter < content.sections.length) {
          let section = content.insertSection(content.sections[counter++]);
          return {
            value: section,
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    };
  }
}


/*  Helper function to create the sections. */
const insertSections = () => {
  let htmlSection = '';
  for (const section of content) {
    htmlSection += section;
  }
  return htmlSection;
};

/*  Helper function to create the dynamic navbar. */
const addnavbar = () => {
  const sections = document.querySelectorAll("section");
  const frag = document.createDocumentFragment();

  sections.forEach(function (section) {
    const item = document.createElement('li');
    item.classList.add('menu__link');
    item.textContent = section.dataset.sectionname;
    // Scroll to section on link click
    item.addEventListener('click', function () {

      const clickedItem = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: clickedItem,
        behavior: 'smooth'
      });
      // update active section class
      let currentActiveSection = document.getElementsByClassName(activeSection)[0];
      currentActiveSection.classList.remove(activeSection);
      section.classList.add(activeSection);

      // update active Navbar item class
      let currentActiveNavbarItem = document.getElementsByClassName(activeNavItem)[0];
      currentActiveNavbarItem.classList.remove(activeNavItem);
      li_Element.classList.add(activeNavItem);

    });
    frag.appendChild(item);
  });
  frag.firstElementChild.classList.add(activeNavItem);
  return frag
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
/*  to insert sections after heading tilte */
document.querySelector('main').insertAdjacentHTML("beforeend", insertSections());
/*  to add navbar  */
document.getElementById('navbar__list').appendChild(addnavbar());

/* change active state of Navbar when scrolling */
const menuLinks = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');

// Helper function to be clear which section is Active 
function changeActiveNavbarItem() {
  // array length 
  let index = sections.length;
  //decrements the index with each iteration
  while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
  menuLinks.forEach((link) => link.classList.remove(activeNavItem));
  menuLinks[index].classList.add(activeNavItem);
}
// Set sections as active
changeActiveNavbarItem();
window.addEventListener('scroll', changeActiveNavbarItem);
