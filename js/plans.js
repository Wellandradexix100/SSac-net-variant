function getPlanosHTML() {
  return `
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div class="flex-grow">
                <h3 class="text-2xl font-semibold mb-2">Plano Básico</h3>
                <p class="text-xl text-gray-600 mb-4">200 MEGA - TV</p>
                <p class="text-gray-500 mb-4">
                    Ideal para quem procura uma conexão estável e com boa
                    velocidade para navegação e streaming.
                </p>
                <p class="text-3xl font-bold text-center mb-4">
                    <span class="text-lg">R$</span>59,99<span class="text-sm">
                    / Mensal</span>
                </p>
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=+558197316898&text=Quero%20%assinar%20o%20plano%20básico20%200Mega."
                class="mt-auto inline-block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-800 text-center"
                target="_blank"
                >Contratar</a>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div class="flex-grow">
                <h3 class="text-2xl font-semibold mb-2">Plano Plus</h3>
                <p class="text-xl text-gray-600 mb-4">300 MEGA - TV + Fixo</p>
                <p class="text-gray-500 mb-4">
                    Para quem precisa de mais velocidade e deseja incluir
                    telefonia fixa.
                </p>
                <p class="text-3xl font-bold text-center  mb-4">
                    <span class="text-lg">R$</span>79,99<span class="text-sm">
                    / Mensal</span>
                </p>
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=+558197316898&text=Quero%20%assinar%20o%20plano%20Plus%20300Mega."
                class="mt-auto inline-block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-800 text-center"
                target="_blank"
                >Contratar</a>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div class="flex-grow">
                <h3 class="text-2xl font-semibold mb-2">Plano Max</h3>
                <p class="text-xl text-gray-600 mb-4">500 MEGA - TV + Fixo</p>
                <p class="text-gray-500 mb-4">
                    Para famílias que precisam de alta velocidade para múltiplos
                    dispositivos e comunicação fixa.
                </p>
                <p class="text-3xl font-bold mb-4 text-center ">
                    <span class="text-lg">R$</span>99,99<span class="text-sm">
                    / Mensal</span>
                </p>
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=+558197316898&text=Quero%20%assinar%20o%20plano%20Max%20500Mega."
                class="mt-auto inline-block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-800 text-center"
                target="_blank"
                >Contratar</a>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div class="flex-grow">
                <h3 class="text-2xl font-semibold mb-2">Plano Power</h3>
                <p class="text-xl text-gray-600 mb-4">600 MEGA - TV + Fixo</p>
                <p class="text-gray-500 mb-4">
                    Para quem precisa de uma conexão ultrarrápida e todos os
                    recursos incluídos.
                </p>
                <p class="text-3xl font-bold text-center  mb-4">
                    <span class="text-lg">R$</span>124,99<span class="text-sm">
                    / Mensal</span>
                </p>
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=+558197316898&text=Quero%20%assinar%20o%20plano%20Power%20600Mega."
                class="mt-auto inline-block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-800 text-center"
                target="_blank"
                >Contratar</a>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div class="flex-grow">
                <h3 class="text-2xl font-semibold mb-2">Plano Supreme</h3>
                <p class="text-xl text-gray-600 mb-4">1 GIGA - TV + Fixo</p>
                <p class="text-gray-500 mb-4">
                    Para quem busca o máximo desempenho e todos os benefícios
                    incluídos.
                </p>
                <p class="text-3xl font-bold text-center  mb-4">
                    <span class="text-lg">R$</span>149,99<span class="text-sm">
                    / Mensal</span>
                </p>
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=+558197316898&text=Quero%20%assinar%20o%20plano%20Supreme%201Giga."
                class="mt-auto inline-block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-800 text-center"
                target="_blank"
                >Contratar</a>
        </div>
    `;
}

function renderPlanos() {
  document.getElementById("planos-container").innerHTML = getPlanosHTML();
}

document.addEventListener("DOMContentLoaded", renderPlanos);
