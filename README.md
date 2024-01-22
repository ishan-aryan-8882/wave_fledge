# wave_fledge



git add .
git status
git commit -m "file save"
git push origin main

.slider-below-show::after{
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bgColor);
  /* background: rgb(0, 0, 255); */
  z-index: -1;
  width: 20%;
  /* clip-path: polygon(0 0, 0 100%, 100% 100%); */
  /* clip-path: polygon(0 0, 0 100%, 100% 100%,0 30%) */
  /* left: 97%; */
  transform: translateX(240px) !important;
  clip-path: polygon(13% 42%,33% 70%,55% 86%,76% 94%,100% 100%,0% 100%,0% 37%);
}

.slider-below-show::before{
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bgColor);
  /* background: red; */
  z-index: -1;
  width: 20%;
  /* clip-path: polygon(0 0, 0 100%, 100% 100%); */
  clip-path: polygon(87% 42%, 67% 70%, 45% 86%, 24% 94%, 0% 100%, 100% 100%, 100% 37%);
  transform: translateX(-39px) !important;
}