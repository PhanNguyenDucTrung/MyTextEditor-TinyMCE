tinymce.init({
    selector: 'textarea#default-editor',
});

tinymce.init({
    selector: '#inline-editor',
    inline: true,
});

tinymce.init({
    selector: '#editor-2',
    toolbar: 'undo redo styles bold italic alignleft aligncenter alignright alignjustify outdent indent',
});

tinymce.init({
    selector: '#outer-editor',
});

tinymce.init({
    selector: '#inner-editor',
});

tinymce.init({
    selector: '.multiple-p-editor',
    inline: true,
    menubar: false,
    toolbar: 'bold italic underline undo redo',
    width: 200,
});

function newTextEditor(targetElement) {
    const editor = tinymce.init({
        target: targetElement,
        // inline: true,
        menubar: false,
        toolbar: 'undo redo | bold italic underline',
        min_height: 100,
        resize: true,
        plugins: 'autoresize',
        statusbar: false,
    });

    console.log(editor);
}

document.getElementById('addBtn').addEventListener('click', () => {
    const newP = document.createElement('p');

    newP.innerHTML = 'New paragraph';

    newTextEditor(newP);

    const container = document.getElementById('ifixit-editor');
    container.appendChild(newP);
});
