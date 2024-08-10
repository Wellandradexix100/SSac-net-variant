function getTestimonialsHTML() {
  return `
        <div class="swiper-slide about-item flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg">
            <span class="font-semibold text-green-500 mb-2">Stella Barbosa</span>
            <p class="text-gray-600">
                Sou cliente da SSACNET a mais de 10 anos, e compartilhei pra
                muitas pessoas e somos gratos. Obrigada SSACNETFIBRA
            </p>
        </div>
        <div class="swiper-slide about-item flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg">
            <span class="font-semibold text-green-500 mb-2">Fernanda de Moraes</span>
            <p class="text-gray-600">
                Internet muito boa, sou cliente a mais de 5 anos, sempre temos
                assistência quando é preciso. Uso e recomendo. Internet top
            </p>
        </div>
        <div class="swiper-slide about-item flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg">
            <span class="font-semibold text-green-500 mb-2">Mikael Rabelo</span>
            <p class="text-gray-600">
                Muito rápida!!! Melhor provedor de internet da região, e
                entrega realmente o que foi contratado.
            </p>
        </div>
        <div class="swiper-slide about-item flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg">
            <span class="font-semibold text-green-500 mb-2">Lilian Menezes</span>
            <p class="text-gray-600">
                Nunca fico sem net, a atenção deles com o cliente é nota 10.
            </p>
        </div>
        <div class="swiper-slide about-item flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg">
            <span class="font-semibold text-green-500 mb-2">Alex Bruno</span>
            <p class="text-gray-600">
                Internet, top! <br />
                Qualidade, eficiência e bom atendimento.<br />
                Super recomendo.
            </p>
        </div>
        <div class="swiper-slide about-item flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg">
            <span class="font-semibold text-green-500 mb-2">José Ivanilto</span>
            <p class="text-gray-600">
                Muito boa que Deus continue abençoando todos nós 🙌
            </p>
        </div>
    `;
}

function renderTestimonials() {
  document.querySelector(".swiper-wrapper").innerHTML = getTestimonialsHTML();
}

// Chame a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", renderTestimonials);
