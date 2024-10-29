window.$docsify = {
    name: 'VR Escape Game',
    repo: 'https://github.com/Timingmerkat83/VR-Escape-Game/blob/main/README.md',
    auto2top: true,
    loadSidebar: false,
    autoHeader: true,
    fallbackLanguages: ['en', 'fr'],
    loadNavbar: false,
    nativeEmoji: true,
    subMaxLevel: 3,
    copyCode: {
        buttonText: 'Copy Code Snippet',
        errorText: '⚠️ Copy Failed',
        successText: '✅ Code Copied!',
    },
    search: {
        maxAge: 86400000, // Cache search results for one day
        paths: 'auto', // Enable automatic search paths
    },
    share: {
        reddit: true,
        linkedin: true,
        facebook: false,
        twitter: true,
        whatsapp: true,
        telegram: true,
    },
    plugins: [
        // Lightbox plugin
        function (hook, vm) {
            hook.doneEach(() => {
                import('https://gllmar.github.io/docsify-lightbox/docsify-lightbox.js').then(module => {
                    const images = document.querySelectorAll('img');
                    const lightbox = new module.default({
                        closeWithEsc: true,
                        captions: true
                    });
                    lightbox.initialize(images);
                }).catch(err => console.error('Failed to load Lightbox plugin', err));
            });
        },
        // WaveSurfer plugin
        function (hook, vm) {
            hook.doneEach(() => {
                import('https://gllmar.github.io/docsify-wavesurfer-plugin/docsify-wavesurfer-plugin.js').then(module => {
                    module.initWaveSurfer({
                        barWidth: 3,
                        waveColor: '#3498db',
                        progressColor: '#2ecc71'
                    });
                }).catch(err => console.error('Failed to load WaveSurfer plugin', err));
            });
        },
        // Loading Spinner
        function (hook) {
            hook.beforeEach(() => {
                document.body.classList.add('loading');
            });
            hook.doneEach(() => {
                document.body.classList.remove('loading');
            });
        },
        // Comments Plugin (if available)
        function (hook, vm) {
            hook.doneEach(() => {
                // Add your comments integration here
                // Example: load comments from Disqus or another service
            });
        },
    ],
    themeColor: 'green',
    logo: 'path/to/logo.png',
    footer: {
        text: '© 2024 VR Escape Game. All rights reserved.',
        links: [
            { text: 'Privacy Policy', href: '/privacy' },
            { text: 'Terms of Service', href: '/terms' }
        ]
    },
    css: [
        'https://style.css' // Link to your custom CSS
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.onclick = () => {
        document.body.classList.toggle('dark-mode');
    };
    document.body.appendChild(toggleButton);
});