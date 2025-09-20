document.addEventListener('DOMContentLoaded', function() {

    const letterContentEl = document.getElementById('letter-content');
    const heartEl = document.querySelector('.heart');
    const heartPath = document.getElementById('heart-path');

    /* MODIFICAR: El mensaje de la carta */
    const text = "Para una personita muy especial,\n\n" +
        "La chica mas guapa, talentosa, alegre, carismatica, soñadora, con una risa que enamora, labios cautivadores, los mejores temas de conversacion, con las mejores historias, ojitos sinceros, cabellera admirable, con un corazocito que apesar de haber sufrido sigue siendo bondadoso.\n\n" + 
		  "Eres para mi todo eso y mucho mas, me diste felicidad cuando crei no merecerlo, me diste de los mejores recuerdos de mi vida,  eres un amor de persona, mereces ser feliz Lupita, muy muy feliz.\n\n" +
        "Le doy gracias a Dios por permitirme haberte conocido, hoy de corazon deseo que seas feliz.\n\n"  +
		"Deseo que puedas siempre sonreir, te quiero mucho Lupita.,\n" +
        "Ese lugarcito que creaste en mi corazon siempre sera tuyo. ❤️️";

    /* MODIFICAR: Velocidad de escritura */
    const typingSpeed = 40;

    const heartPathLength = heartPath.getTotalLength();
    heartPath.style.strokeDasharray = heartPathLength;
    heartPath.style.strokeDashoffset = heartPathLength;

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            letterContentEl.innerHTML += text.charAt(i);
            const progress = i / (text.length - 1);
            const newDashoffset = heartPathLength * (1 - progress);
            heartPath.style.strokeDashoffset = newDashoffset;
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            letterContentEl.classList.add('typing-done');
            heartEl.classList.add('finished');
        }
    }

    typeWriter();

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        const size = Math.random() * 6 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        sparkle.style.left = `${x - size / 2}px`;
        sparkle.style.top = `${y - size / 2}px`;

        const randomX = Math.random() * 40 - 20;
        const randomY = Math.random() * 40 - 20;

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    document.addEventListener('mousemove', (e) => {
        createSparkle(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {

        if (e.touches.length > 0) {
            createSparkle(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
});// JavaScript Document