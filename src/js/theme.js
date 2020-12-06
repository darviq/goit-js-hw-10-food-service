const refs = {
    body: document.querySelector('body'),
    themeInput: document.querySelector('#theme-switch-toggle'),
}

const theme = {
    light: 'light-theme',
    dark: 'dark-theme',
};

const changeAndSaveTheme = () => {
    for (key in theme) refs.body.classList.toggle(theme[key]);
    refs.body.classList.contains(theme.dark)
    ? localStorage.setItem('theme', JSON.stringify(theme.dark))
    : localStorage.setItem('theme', JSON.stringify(theme.light))
}

const checkTheme = () => {
    if (JSON.parse(localStorage.getItem('theme')) === theme.dark) {
        refs.body.classList.add(theme.dark);
        refs.themeInput.checked = true;
    }
    else {
        refs.body.classList.add(theme.light);
        refs.themeInput.checked = false;
    }
}

refs.themeInput.addEventListener('change', changeAndSaveTheme);
checkTheme();