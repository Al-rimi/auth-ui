# auth-UI

**auth-UI** is a modern and customizable authentication user interface designed for web applications. It includes fully responsive **login** and **signup** pages, complete with input validation, user-friendly animations, and multi-language support.

![auth-UI Preview](assets/images/syalux-logo-02.svg)

## 🌟 Features

- **Responsive Design**: Optimized for all devices, from desktops to mobile phones.
- **Signup and Login Forms**: Secure and elegant forms with validation messages.
- **Background Animation**: Dynamic particle effects create an engaging visual experience.
- **Password Visibility Toggle**: Easy-to-use icon to show or hide passwords.
- **Multi-Language Support**: Supports languages like English, Arabic, Chinese, and more.
- **RTL and LTR Support**: Adapts form direction for right-to-left languages.
- **Meta Tags**: Preconfigured SEO and social media metadata.
- **Cross-Browser Compatibility**: Works seamlessly on modern browsers.
- **Privacy & Security**: Includes modern security headers like CSP, X-Content-Type, and more.

## 🚀 Demo

Check out the live demo: [auth-UI](https://example.com)  

## 📂 Project Structure

```plaintext
auth-ui/
├── assets/
│   ├── css/            
│   │   ├── main.css
│   │   ├── adjustments.css
│   │   └── background.css
│   ├── images/           
│   │   ├── syalux-logo.svg
│   │   ├── syalux-logo-loop.gif
│   │   └── favicon.ico
│   ├── js/              
│   │   ├── languages.js
│   │   ├── validation.js
│   │   ├── toggleIcon.js
│   │   └── background.js
│   └── languages/       
│       ├── signup.json
│       ├── login.json
│       └── ...
├── login.html      
├── signup.html       
└── README.md               
```

## 🛠️ Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Al-rimi/auth-ui.git
   cd auth-ui
   ```

2. Open the project in your browser:
   - For **login** page: `login.html`
   - For **signup** page: `signup.html`

3. Customize the project:
   - Update the content in `assets/languages/` for multi-language support.
   - Adjust styles in `assets/css/`.

## 🌐 Multi-Language Support

To add a new language:

1. Create a new JSON file in `assets/languages/` named after the page type (e.g., `login.json`).
2. Add translations for all elements, including meta tags, placeholders, and error messages:
   ```json
   {
       "en": {
           "head": {
               "title": "Login",
               "description": "User Login Page",
               "keywords": "login, user authentication"
           },
           "body": {
               "title": "Welcome Back!",
               "username": "Enter your username",
               ...
           }
       },
       ...
   }
   ```

## ✨ Customization

- **Logo**: Replace `assets/images/syalux-logo.svg` with your own.
- **Animations**: Modify the particle effects in `background.js`.
- **Styles**: Customize the UI using `assets/css/main.css`.

## 🤝 Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request. For major changes, please open an issue to discuss them first.

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
You are free to use, modify, and distribute it as per the terms of the license.

---

🎉 **Enjoy using auth-UI to build your next amazing project!**  
For support or suggestions, please contact [abdullah@syalux.com](mailto:abdullah@syalux.com).
```

### Steps to Use:
- Update the placeholder for the live demo URL.
- Add a license file if you haven't already.
- Include the logo/image URL or create one that represents your project.

Let me know if you'd like further refinements!