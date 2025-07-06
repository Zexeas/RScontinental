// Datos de propiedades (puedes reemplazarlos con una API real)
const properties = [
    {
        id: 1,
        title: "Casa Moderna en la Ciudad",
        price: "$350,000",
        bedrooms: 3,
        bathrooms: 2,
        location: "Ciudad Ejemplo",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 2,
        title: "Departamento de Lujo",
        price: "$250,000",
        bedrooms: 2,
        bathrooms: 2,
        location: "Zona Residencial",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 3,
        title: "Villa con Piscina",
        price: "$500,000",
        bedrooms: 4,
        bathrooms: 3,
        location: "Área Exclusiva",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Cargar propiedades en el DOM
document.addEventListener('DOMContentLoaded', () => {
    const propertyContainer = document.getElementById('property-container');

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p><strong>Precio:</strong> ${property.price}</p>
                <p><strong>Habitaciones:</strong> ${property.bedrooms}</p>
                <p><strong>Baños:</strong> ${property.bathrooms}</p>
                <p><strong>Ubicación:</strong> ${property.location}</p>
                <a href="#contacto" class="btn">Contactar</a>
            </div>
        `;
        propertyContainer.appendChild(propertyCard);
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        contactForm.reset();
    });
});