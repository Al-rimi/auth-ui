// Detect user language and set a default
var userLanguage = (navigator.language || navigator.userLanguage).substring(0, 2);
const supportedLanguages = ['en', 'ar', 'fr', 'zh', 'ru', 'de', 'es', 'it', 'pt'];
const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
const language = supportedLanguages.includes(userLanguage) ? userLanguage : 'en';

// Function to set attribute content (like meta tags)
function setAttributeContent(id, attribute, content) {
    const element = document.getElementById(id);
    if (element) {
        element.setAttribute(attribute, content || '');
    }
}

// Function to set direction for RTL or LTR based on language
function setDirection(input) {
    const textToCheck = input.value || input.placeholder;
    const isArabic = /[\u0600-\u06FF\u0750-\u077F]/.test(textToCheck.charAt(0));
    input.dir = isArabic ? 'rtl' : 'ltr';

    // Adjust password toggle icon for RTL languages
    if (input.id === 'i2') {
        const toggleIcon = document.getElementById('toggleIcon');
        if (isArabic) {
            toggleIcon.classList.add("showHideImageRtl");
        } else {
            toggleIcon.classList.remove("showHideImageRtl");
        }
    }
}

// Determine the page type (login, signup, etc.) based on the file name or title
const pageType = document.title.toLowerCase().includes('login') ? 'login' :
                 document.title.toLowerCase().includes('signup') ? 'signup' : 
                 'default'; // add more for more ages

// Fetch the appropriate JSON file based on page type and language
fetch(`./assets/languages/${pageType}.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Set HTML language attribute
        document.documentElement.lang = language;

        // Set the page title from JSON data
        document.title = data[language].head.title || document.title;

        // Set meta tags
        document.querySelectorAll('.description').forEach(meta => {
            meta.setAttribute('content', data[language].head.description);
        });
        document.querySelectorAll('.keywords').forEach(meta => {
            meta.setAttribute('content', data[language].head.keywords);
        });
        document.querySelectorAll('.siteName').forEach(meta => {
            meta.setAttribute('content', data[language].head.siteName);
        });
        document.querySelectorAll('.siteLanguage').forEach(meta => {
            meta.setAttribute('content', data[language].head.siteLanguage);
        });

        // Set body content (headings, buttons, form placeholders, etc.)
        document.body.style.fontFamily = data[language].body.font || '';
        document.getElementById('h1').textContent = data[language].body.h1 || '';
        document.getElementById('b1').textContent = data[language].body.b1 || '';
        document.getElementById('b2').textContent = data[language].body.b2 || '';
        document.getElementById('b3').textContent = data[language].body.b3 || '';

        // Set placeholders for input fields (username, password, etc.)
        const inputs = ['i1', 'i2', 'i3', 'i4'];
        inputs.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.placeholder = data[language].body[id] || '';
                input.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
            }
        });

        // Handle errors dynamically based on page type
        if (pageType === 'login') {
            document.getElementById('usernameOrEmailWrong').textContent = data[language].body.username?.usernameOrEmailWrong || '';
            document.getElementById('passwordWrong').textContent = data[language].body.password?.passwordWrong || '';
        } else if (pageType === 'signup') {
            document.getElementById('usernameTaking').textContent = data[language].body.username?.usernameTaking || '';
            document.getElementById('usernameNotValidCharacters').textContent = data[language].body.username?.usernameNotValidCharacters || '';
            document.getElementById('usernameNotValidLengthLong').textContent = data[language].body.username?.usernameNotValidLengthLong || '';
            document.getElementById('usernameNotValidLengthShort').textContent = data[language].body.username?.usernameNotValidLengthShort || '';
            document.getElementById('emailTaking').textContent = data[language].body.email?.emailTaking || '';
            document.getElementById('emailNotValidPattern').textContent = data[language].body.email?.emailNotValidPattern || '';
            document.getElementById('passwordNoUppercaselowercase').textContent = data[language].body.password?.passwordNoUppercaselowercase || '';
            document.getElementById('passwordNotValidLength').textContent = data[language].body.password?.passwordNotValidLength || '';
            document.getElementById('passwordsMatch').textContent = data[language].body.password?.passwordsMatch || '';
        }

        // Adjust RTL layout
        const isRtl = rtlLanguages.includes(language);
        document.querySelectorAll('.errorMessageDiv .errorMessage').forEach(message => {
            message.dir = isRtl ? 'rtl' : 'ltr';
        });

        // Set RTL for the entire body if necessary
        document.body.style.textAlign = isRtl ? 'right' : 'left';

        // Optionally, handle specific elements like buttons or form inputs
        const elementsToFlip = document.querySelectorAll('input, button, textarea, select');
        elementsToFlip.forEach(element => {
            element.dir = isRtl ? 'rtl' : 'ltr';
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Set direction for input fields based on their content (for RTL handling)
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => setDirection(input));
    });
});
