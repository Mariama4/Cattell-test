submit.addEventListener( "click" , test());
function test() {
    let types = {

    };
    let a, b, c, d, e, f, g, h, i, l, m, n, o, q1, q2, q3, q4;
    let factA = ['q3','q26','q27','q51','q52','q76','q101','q126','q151','q176'];
    let factB = ['q28','q53','q54','q77','q78','q102','q103','q127','q128','q152','q153','q177','q178'];
    let factC = ['q4','q5','q29','q30','q55','q79','q80','q104','q105','q129','q130','q154','q179'];
    let factE = ['q6','q7','q31','q32','q56','q57','q81','q106','q131','q155','q156','q180','q181'];
    let factF = ['q8','q33','q58','q82','q83','q107','q108','q132','q133','q157','q158','q182','q183'];
    let factG = ['q9','q43','q59','q84','q109','q134','q159','q160','q184','q185'];
    let factH = ['q10','q35','q36','q60','q61','q85','q86','q110','q111','q135','q136','q161','q186'];
    let factI = ['q11','q12','q37','q62','q87','q112','q137','q138','q162','q163'];
    let factL = ['q13','q38','q63','q64','q88','q89','q113','q114','q139','q164'];
    let factM = ['q14','q15','q39','q40','q65','q90','q91','q115','q116','q140','q141','q165','q166'];
    let factN = ['q16','q17','q41','q42','q66','q67','q92','q117','q142','q167'];
    let factO = ['q18','q19','q43','q44','q68','q69','q93','q94','q118','q119','q143','q144','q168'];
    let factQ1 = ['q20','q21','q45','q46','q70','q95','q120','q145','q169','q170'];
    let factQ2 = ['q22','q47','q71','q72','q96','q97','q121','q122','q146','q171'];
    let factQ3 = ['q23','q24','q48','q73','q98','q123','q147','q148','q172','q173'];
    let factQ4 = ['q25','q49','q50','q74','q75','q99','q100','q124','q125','q149','q150','q174','q175'];
    let type;

    function resetScore() {
        a = b = c = 0;
        type = 0;
    }

    function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
                    case 'a': 
                        if (factA.indexOf(input.name) != -1) {
                            a += 2;
                        }
                        if (factB.indexOf(input.name) != -1) {
                            b += 2;
                        }
                        if (factC.indexOf(input.name) != -1) {
                            c += 2;
                        }
                        if (factE.indexOf(input.name) != -1) {
                            e += 2;
                        }
                        if (factF.indexOf(input.name) != -1) {
                            f += 2;
                        }
                        if (factG.indexOf(input.name) != -1) {
                            g += 2;
                        }
                        if (factH.indexOf(input.name) != -1) {
                            h += 2;
                        }
                        if (factI.indexOf(input.name) != -1) {
                            i += 2;
                        }
                        if (factL.indexOf(input.name) != -1) {
                            l += 2;
                        }
                        if (factM.indexOf(input.name) != -1) {
                            m += 2;
                        }
                        if (factN.indexOf(input.name) != -1) {
                            n += 2;
                        }
                        if (factO.indexOf(input.name) != -1) {
                            o += 2;
                        }
                        if (factQ1.indexOf(input.name) != -1) {
                            q1 += 2;
                        }
                        if (factQ2.indexOf(input.name) != -1) {
                            q2 += 2;
                        }
                        if (factQ3.indexOf(input.name) != -1) {
                            q3 += 2;
                        }
                        if (factQ4.indexOf(input.name) != -1) {
                            q4 += 2;
                        } 
                        break;
                    case 'b': 
                        if (factA.indexOf(input.name) != -1) {
                            a += 1;
                        }
                        if (factB.indexOf(input.name) != -1) {
                            b += 1;
                        }
                        if (factC.indexOf(input.name) != -1) {
                            c += 1;
                        }
                        if (factE.indexOf(input.name) != -1) {
                            e += 1;
                        }
                        if (factF.indexOf(input.name) != -1) {
                            f += 1;
                        }
                        if (factG.indexOf(input.name) != -1) {
                            g += 1;
                        }
                        if (factH.indexOf(input.name) != -1) {
                            h += 1;
                        }
                        if (factI.indexOf(input.name) != -1) {
                            i += 1;
                        }
                        if (factL.indexOf(input.name) != -1) {
                            l += 1;
                        }
                        if (factM.indexOf(input.name) != -1) {
                            m += 1;
                        }
                        if (factN.indexOf(input.name) != -1) {
                            n += 1;
                        }
                        if (factO.indexOf(input.name) != -1) {
                            o += 1;
                        }
                        if (factQ1.indexOf(input.name) != -1) {
                            q1 += 1;
                        }
                        if (factQ2.indexOf(input.name) != -1) {
                            q2 += 1;
                        }
                        if (factQ3.indexOf(input.name) != -1) {
                            q3 += 1;
                        }
                        if (factQ4.indexOf(input.name) != -1) {
                            q4 += 1;
                        }
                        break;
                    case 'c': 
                        if (factA.indexOf(input.name) != -1) {
                            a += 2;
                        }
                        if (factB.indexOf(input.name) != -1) {
                            b += 2;
                        }
                        if (factC.indexOf(input.name) != -1) {
                            c += 2;
                        }
                        if (factE.indexOf(input.name) != -1) {
                            e += 2;
                        }
                        if (factF.indexOf(input.name) != -1) {
                            f += 2;
                        }
                        if (factG.indexOf(input.name) != -1) {
                            g += 2;
                        }
                        if (factH.indexOf(input.name) != -1) {
                            h += 2;
                        }
                        if (factI.indexOf(input.name) != -1) {
                            i += 2;
                        }
                        if (factL.indexOf(input.name) != -1) {
                            l += 2;
                        }
                        if (factM.indexOf(input.name) != -1) {
                            m += 2;
                        }
                        if (factN.indexOf(input.name) != -1) {
                            n += 2;
                        }
                        if (factO.indexOf(input.name) != -1) {
                            o += 2;
                        }
                        if (factQ1.indexOf(input.name) != -1) {
                            q1 += 2;
                        }
                        if (factQ2.indexOf(input.name) != -1) {
                            q2 += 2;
                        }
                        if (factQ3.indexOf(input.name) != -1) {
                            q3 += 2;
                        }
                        if (factQ4.indexOf(input.name) != -1) {
                            q4 += 2;
                        } 
                        break;
				}
			}
		});
   
    
    // function calculatePercentages() {
	// 	a = Math.floor(e / 10 * 100);
	// 	b = Math.floor(i / 10 * 100);
	// 	c = Math.floor(s / 20 * 100);
	// 	e = Math.floor(n / 20 * 100);
	// 	f = Math.floor(t / 20 * 100);
	// 	g = Math.floor(f / 20 * 100);
	// 	h = Math.floor(j / 20 * 100);
    //     i = Math.floor(p / 20 * 100);
    //     l = Math.floor(e / 10 * 100);
	// 	m = Math.floor(i / 10 * 100);
	// 	n = Math.floor(s / 20 * 100);
	// 	o = Math.floor(n / 20 * 100);
	// 	q1 = Math.floor(t / 20 * 100);
	// 	q2 = Math.floor(f / 20 * 100);
	// 	q3 = Math.floor(j / 20 * 100);
	// 	q4 = Math.floor(p / 20 * 100);
    // }
    
    // function createCharts() {
	// 	document.querySelector("#aScore").innerHTML = a;
	// 	document.querySelector("#bScore").innerHTML = b;
	// 	document.querySelector("#cScore").innerHTML = c;
	// 	document.querySelector("#eScore").innerHTML = e;
	// 	document.querySelector("#fScore").innerHTML = f;
	// 	document.querySelector("#gScore").innerHTML = g;
	// 	document.querySelector("#hScore").innerHTML = h;
    //     document.querySelector("#iScore").innerHTML = i;
    //     document.querySelector("#lScore").innerHTML = l;
	// 	document.querySelector("#mScore").innerHTML = m;
	// 	document.querySelector("#nScore").innerHTML = n;
	// 	document.querySelector("#oScore").innerHTML = o;
	// 	document.querySelector("#q1Score").innerHTML = q1;
	// 	document.querySelector("#q2Score").innerHTML = q2;
	// 	document.querySelector("#q3Score").innerHTML = q3;
	// 	document.querySelector("#q4Score").innerHTML = q4;
		
	// 	document.querySelector("#abChart").style.marginLeft = b / 2 + "%";
	// 	document.querySelector("#ceChart").style.marginLeft = e / 2 + "%";
	// 	document.querySelector("#fgChart").style.marginLeft = g / 2 + "%";
    //     document.querySelector("#hiChart").style.marginLeft = i / 2 + "%";
    //     document.querySelector("#lmChart").style.marginLeft = m / 2 + "%";
	// 	document.querySelector("#noChart").style.marginLeft = o / 2 + "%";
	// 	document.querySelector("#q1q2Chart").style.marginLeft = q2 / 2 + "%";
	// 	document.querySelector("#q3q4Chart").style.marginLeft = q4 / 2 + "%";
    // }
    
    // function showResults() {
	// 	type += (a >= i) ? "E" : "I";
	// 	type += (s >= n) ? "S" : "N";
	// 	type += (t >= f) ? "T" : "F";
	// 	type += (j >= p) ? "J" : "P";
	// 	document.querySelector("#type").innerHTML = type;
	// 	document.querySelector("#type-title").innerHTML = types[type].title;
	// 	document.querySelector("#type-percentage").innerHTML = types[type].percentage;
	// 	document.querySelector("#type-description").innerHTML = types[type].description;
	// 	document.querySelector("#type-site").href = types[type].site;
		
	// 	document.querySelector("#type-details").classList.remove("hidden");
	// 	document.querySelector("#scroll-down").classList.remove("hidden");
	// 	document.querySelector("#results").classList.remove("hidden");
	// }

getScores();
alert(a);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [a, b, c, d, e, f, g, h, i, l, m, n, o, q1, q2, q3, q4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
} 