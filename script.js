const hamburger = document.querySelector('.hamburger');
const navbarlist = document.querySelector('.navbarlist');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show');
  navbarlist.classList.toggle('show');
  if (body.style.width < 574) {
    logo.innerHTML = '';
  }
});

document.querySelectorAll('.nav-list').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('show');
  navbarlist.classList.remove('show');
  logo.innerHTML = 'John Doe';
  logo.style.color = 'white';
}));

// popup window

const projects = [
  {
    id: 1,
    name: 'Multi - Post stories',
    featuredImage: 'placeholder.png',
    featuredImage2: 'modal.png',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    desc:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    technologies: ['html', 'Ruby on rails', 'css'],
    technologies2: ['css', 'html', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Multi - Post stories2',
    featuredImage: 'placeholder.png',
    featuredImage2: 'modal.png',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    desc:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    technologies: ['html', 'Ruby on rails', 'css'],
    technologies2: ['css', 'html', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Multi - Post stories3',
    featuredImage: 'placeholder.png',
    featuredImage2: 'modal.png',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    desc:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    technologies: ['html', 'Ruby on rails', 'css'],
    technologies2: ['css', 'html', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Multi - Post stories4',
    featuredImage: 'placeholder.png',
    featuredImage2: 'modal.png',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    desc:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    technologies: ['html', 'Ruby on rails', 'css'],
    technologies2: ['css', 'html', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    source: '#',
  },
];

const mainBody = document.querySelector('.main-body');
const windowPop = document.querySelector('.window-popup');
const wrapper = document.querySelector('.wrapper');

const mainContainer = projects.map((project) => `<div
class="projects-container hide-in-desktop show">
<div
    class="image-placeholder hide-in-desktop show">
    <img src="IMG1/${project.featuredImage}"
        alt="${project.name}">
</div>
<div
    class="content hide-in-desktop show">
    <div class="text-area">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
    </div>
    <ul class="list-tags">
        ${project.technologies2.map((technology) => `<li class="border-right">${technology}</li>`).join('')}
    </ul>
    <button type="button" onclick="showModal(${project.id})"
        class="myprojects">See
        projects</button>
</div>
</div>`).join('');

// append the main-container to the main-body container
mainBody.innerHTML += mainContainer;

// create the modal pop up

const windowContent = (modal) => {
  const template = document.createElement('template');
  template.innerHTML = ` <div class="heading">
<h2>${modal.name}</h2>
<button class="close" onclick="closeModal()" >&times</button>
</div>
<img src="IMG1/${modal.featuredImage2}" alt="${modal.name}">
<p>${modal.desc}</p>
<ul class="tags">
${modal.technologies.map((technology) => `<li>${technology}</li>`).join('')}
</ul>
<div class="click-me">
<button type="button" class="see-live">See live</button>
<button type="button" class="source">See source</button>
</div>`;
  windowPop.appendChild(template.content);
  wrapper.classList.add('active');
};

const showModal = (id) => {
  projects.find((item) => {
    if (Number(id) === Number(item.id)) {
      windowContent(item);
    }
    return undefined;
  });
};

// close modal when x button is click
function closeModal() {
  windowPop.innerHTML = '';
  wrapper.classList.remove('active');
}
