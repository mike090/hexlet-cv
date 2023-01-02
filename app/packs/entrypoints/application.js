// @ts-check

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import '../stylesheets/application.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const $ = require('jquery');
// @ts-ignore
window.jQuery = $;
require('@rails/ujs').start();
// require('@hotwired/turbo-rails');
// require('@rails/activestorage').start();
// require('channels');
require('popper.js');
window.bootstrap = require('bootstrap');
require('@nathanvda/cocoon');
// import ("bootstrap");

// dom.watch()


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//

// @ts-ignore
const images = require.context('../images', true);
// const imagePath = (name) => images(name, true)

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
