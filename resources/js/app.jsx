import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

createInertiaApp({
    title: (title) => `${title} - Sapujogan`,
    resolve: (name) => pages[`./Pages/${name}.jsx`],
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#d8b45f',
    },
});
