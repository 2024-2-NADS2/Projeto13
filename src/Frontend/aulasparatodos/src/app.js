       export default function app() {
        let currentIndex = 0;
            const cursos = document.querySelector('.cursos');
            const totalCursos = document.querySelectorAll('.curso').length;
            
            currentIndex += direction;
            
            if (currentIndex < 0) {
                currentIndex = totalCursos - 2;
            } else if (currentIndex >= totalCursos) {
                currentIndex = 0;
            }
            
    
            const offset = -currentIndex * (175); /* aumentar algo entre 35 e 60 px por curso a mais */ 
            cursos.style.transform = `translateX(${offset}px)`;
        }