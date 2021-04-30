function changeOuterLinks() {
    const aElements = document.querySelectorAll(`nav.link-list a`);
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].getAttribute('outer-link', aElements[i].innerHTML);
    }

    document.querySelectorAll('nav').forEach( e => {
        e.style.display = 'flex';
        e.style.flexDirection = 'column';
        e.style.width = '30%';
        e.style.margin = '0 auto';
        e.style.border = '1px solid blue';
        e.style.padding = '16px';
    });
}


export { changeOuterLinks };