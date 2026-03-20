import styles from './Button.module.scss';

const svgIcons = {
 button__arrow: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20">
  <path 
    d="M1 1.5L9.5 10L1 18.5" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    fill="none"
  />
</svg>
  `,
};

export default function Button({
  buttonText = '',
  buttonType = 'button',
  buttonVariant = 'main',
  buttonClass = '',
  buttonOnClick,
}) {
  const template = document.createElement('template');

  template.innerHTML = `
  <button type="${buttonType}" class="${styles.button} ${styles[buttonVariant] || ''} ${styles[buttonClass] || ''}">
  ${buttonText}
  ${svgIcons[buttonVariant] || ''}
  </button>
  `;

  const button = template.content.firstElementChild;


  if (buttonOnClick) {
    button.addEventListener('click', buttonOnClick);
  }

  return button;
}
