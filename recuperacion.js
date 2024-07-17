let tabla = document.querySelector("#tabla");
        let formulario = document.querySelector("#formulario");
        let numero1 = document.querySelector("#numero1");
        let numero2 = document.querySelector("#numero2");
        let numero3 = document.querySelector("#numero3");
        let error1 = document.querySelector("#error1");
        let error2 = document.querySelector("#error2");
        let error3 = document.querySelector("#error3");
        let volverBtn = document.querySelector("#volverBtn");

     
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();


            error1.innerHTML = "";
            error2.innerHTML = "";
            error3.innerHTML = "";


            let valid = true;

            let num1 = (numero1.value).trim();
            let num2 = (numero2.value).trim();
            let num3 = (numero3.value).trim();

            if (num1.length === 0 || isNaN(num1)) {
                error1.innerHTML = "Debe ingresar un número";
                valid = false;
            }
            if (num2.length === 0 || isNaN(num2)) {
                error2.innerHTML = "Debe ingresar un número";
                valid = false;
            }
            if (num3.length === 0 || isNaN(num3)) {
                error3.innerHTML = "Debe ingresar un número";
                valid = false;
            }

            if (valid) {
 
                let a = parseFloat(num1);
                let b = parseFloat(num2);
                let c = parseFloat(num3);


                let resultado = ecuacion(a, b, c);

                if (resultado.discriminante >= 0) {
                    imprimir(a, b, c, resultado.valorx1, resultado.valorx2);
                } else {
                    mostrarMensaje();
                }

                limpiar();

                formulario.style.display = 'none';
                tabla.style.display = 'block';
                volverBtn.style.display = 'block';
            }
        });

        let limpiar = () => {
            numero1.value = "";
            numero2.value = "";
            numero3.value = "";
        }

        numero1.addEventListener("focus", () => {
            error1.innerHTML = "";
        });
        numero2.addEventListener("focus", () => {
            error2.innerHTML = "";
        });
        numero3.addEventListener("focus", () => {
            error3.innerHTML = "";
        });

        let ecuacion = (a, b, c) => {
            let discriminante = Math.pow(b, 2) - 4 * a * c;
            if (discriminante > 0) {
                let raiz = Math.sqrt(discriminante);
                let valorx1 = ((-b + raiz) / (2 * a));
                let valorx2 = ((-b - raiz) / (2 * a));
                return { discriminante, valorx1, valorx2 };
            } else if (discriminante == 0) {
                let valorx1 = (-b / (2 * a));
                return { discriminante, valorx1, valorx1 };
            } else {
                return { discriminante };
            }
        }

        let imprimir = (a, b, c, valorx1, valorx2) => {
            let msg = "<table class='table table-dark table-hover'>";
            msg += "<thead class='table-dark'>";
            msg += "<tr><th>a</th><th>b</th><th>c</th><th>x1</th><th>x2</th></tr>";
            msg += "<thead>";
            msg += "<tbody>";
            msg += "<tr>";
            msg += `<td>${a}</td>`;
            msg += `<td>${b}</td>`;
            msg += `<td>${c}</td>`;
            msg += `<td>${valorx1}</td>`;
            msg += `<td>${valorx2}</td>`;
            msg += "</tr>";
            msg += "</tbody></table>";

            tabla.innerHTML = msg;
        }

        let mostrarMensaje = () => {
            let msg = "<h1  style='color: blueviolet;'> Error 404 :( </h1> <br><h2  style='color: blueviolet;'> La ecuación no tiene solucion ya que la raiz es negativa</h2> <br><h3  style='color: blueviolet; '> Vuelve a intentarlo ingresando nuevos datos</h3>";
            tabla.innerHTML = msg;
        }

        volverBtn.addEventListener('click', () => {
            tabla.style.display = 'none';
            volverBtn.style.display = 'none';
            formulario.style.display = 'block';
        });