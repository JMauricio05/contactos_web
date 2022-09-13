let contactos = [
    {
        nombre: 'María Camila Gomez',
        email: 'mcamila@ejemplo.com',
        telefono: '123456'
    },
    {
        nombre: 'Pepe Rodriguez',
        email: 'test@test.com',
        telefono: '3216564'
    }
];

function mostrarContactos() {
    const tbody = document
        .getElementById('contactosTable')
        .getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    for (let index in contactos) {
        const contacto = contactos[index];
        const id = parseInt(index) + 1;
        let fila = '<tr>';
        fila += '   <td>' + id + '</td>';
        fila += '   <td>' + contacto.nombre + '</td>';
        fila += '   <td>' + contacto.email + '</td>';
        fila += '   <td>' + contacto.telefono + '</td>';
        fila += '</tr>';
        tbody.innerHTML += fila;
    }
}
mostrarContactos();

function cerrarModal() {
    document.getElementById('formularioModal')
        .classList.add('ocularModal');
    const formulario = document.forms['formContacto'];
    formulario.reset();
}

document.getElementById('cerrarModalBtn').addEventListener('click', () => {
    cerrarModal();
});

document.getElementById('registrarBtn').addEventListener('click', () => {
    document.getElementById('formularioModal')
        .classList.remove('ocularModal');
});

document.getElementById('fomularioContacto').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formulario = document.forms['formContacto'];
    const contacto = {
        nombre: formulario['nombre'].value,
        email: formulario['email'].value,
        telefono: formulario['telefono'].value
    };
    contactos.push(contacto);
    cerrarModal();
    mostrarContactos();
});

