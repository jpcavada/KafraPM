function imgAndColor(job) {   
    switch (job) {
        case 'Arcane Master':
            return {
                imgUrl:'https://imgur.com/xKqcg3K.png',
                bg_color:'blue',
            };
        case 'Begetter':
            return {
                imgUrl:'https://imgur.com/KgjJpCb.png',
                bg_color:'orange',
            };
        case 'Chronomancer':
            return {
                imgUrl:'https://imgur.com/Yw3KJWg.png',
                bg_color:'darkblue',
            };
        case 'Divine Avenger':
            return {
                imgUrl:'https://imgur.com/FsEj1eV.png',
                bg_color:'darkred',
            };
        case 'Dragon Fist':
            return {
                imgUrl:'https://imgur.com/zsWvuLP.png',
                bg_color:'green',
            };
        case 'Inferno Armor':
            return {
                imgUrl:'https://imgur.com/KI7sdH9.png',
                bg_color:'crimson',
            };
        case 'Lightbringer':
            return {
                imgUrl:'https://imgur.com/vYmcqTj.png',
                bg_color:'orange',
            };
        case 'Luna Danseuse':
            return {
                imgUrl:'https://imgur.com/pAHv05g.png',
                bg_color:'gold',
            };
        case 'Phantom Dancer':
            return {
                imgUrl:'https://imgur.com/BcD0pz1.png',
                bg_color:'purple',
            };
        case 'Rune Master':
            return {
                imgUrl:'https://imgur.com/8t0FTTA.png',
                bg_color:'crimson',
            };
        case 'Saint':
            return {
                imgUrl:'https://imgur.com/X3ZXtMS.png',
                bg_color:'green',
            };
        case 'Solar Trouvere':
            return {
                imgUrl:'https://imgur.com/7F9pCK1.png',
                bg_color:'gold',
            };
        case 'Soulblade Cross':
            return {
                imgUrl:'https://imgur.com/AGuLrqr.png',
                bg_color:'purple',
            };
        case 'Spirit Whisperer':
            return {
                imgUrl:'https://imgur.com/HuNtfO7.png',
                bg_color: 'greenyellow',
            };
        case 'Stellar Hunter':
            return {
                imgUrl:'https://imgur.com/pCXZNwq.png',
                bg_color:'khaki',
            };
        case 'Novice Guardian':
            return {
                imgUrl:'https://www.romcodex.com/icons/career/icon_14_5.png',
                bg_color:'lightblue',
            };
        case 'Dragon King':
            return {
                imgUrl:'https://imgur.com/cSxH85f.png',
                bg_color:'purple',
            };
        case 'Amaterasu':
            return {
                imgUrl:'https://imgur.com/YmSirBr.png',
                bg_color: 'rgb(255, 102, 255)',
            };
        case 'Slayer':
            return {
                imgUrl:'https://imgur.com/gW2z1bi.png',
                bg_color: 'rgb(204, 0, 102)',
            };
        case 'Tyrant':
            return {
                imgUrl:'resources/tyrant.png',
                bg_color: 'rgb(204, 153, 51)',
            }; 
        case 'Soul Binder':
            return {
                imgUrl:'https://romhandbook.com/assets/jobs/icon_18_5-9321425c769e8a914bc9bdb3f7e70446bdd4e64259a9782d8392a0c18d2f26fa.png',
                bg_color: 'purple',
            };
        case 'Apocalypse':
            return {
                imgUrl:'',
                bg_color: 'DarkKhaki',
            }; 
        default:
            return {
                imgUrl: 'https://romhandbook.com/assets/jobs/icon_19_5-ea1e9a556bfe3620225b477c13b40e9b33fbf80050c35627d5e17f604f62c103.png',
                bg_color: 'green'
            };
        };
}

/*function addpj (pj_name, pj_job) {
    const newPJ = document.createElement('div');
    const newJOBimg = document.createElement('div');
    const newJOB = document.createElement('div');
    const newName = document.createElement('div');
    

    newPJ.setAttribute('class', 'pj');

    newName.setAttribute('class','pj-name');
    newName.textContent = pj_name;

    newJOB.setAttribute('class','job-name');
    newJOB.textContent = pj_job;

    newJOBimg.setAttribute('class','job-image');
    
    const { imgUrl, bg_color = 'black' } = imgAndColor(pj_job);
 
    const img_ele = document.createElement('img');
    img_ele.src = imgUrl;
    img_ele.setAttribute('height','40');
    img_ele.setAttribute('width','40');

    newJOB.style.background = bg_color;

    newJOBimg.appendChild(img_ele);
    newPJ.appendChild(newJOBimg);
    newPJ.appendChild(newName);
    newPJ.appendChild(newJOB);

    document.getElementById('as_cont').appendChild(newPJ);
}
*/
function narmoLaLleva() {
    var woe_date = new Date();
    const  inscritos_name = new Set()//lista para eliminar los duplicados
    console.log(woe_date.toISOString());
    woe_date.setDate( woe_date.getDate() + 1);
    woe_date.setHours(23);
    var start_date = new Date(woe_date);
    start_date.setDate( start_date.getDate() - 2);
    
    string_woe_date = woe_date.getFullYear() +'-' + (woe_date.getMonth()+1) + "-" + woe_date.getDate();
    string_start_date = start_date.getFullYear() +'-' + (start_date.getMonth()+1) + "-" + start_date.getDate();

    
    //var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1k1Fq3VNummYScVxnanThJSimk7YnFwaClh7Kg6cAagE/edit#gid=0';
    //var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1dI1YwANc2tdgW0JgyXECB55JnZ-4bAuhdLPXNlV5NUk/edit#gid=31056058';
    var mySpreadsheet =  'https://docs.google.com/spreadsheets/d/1r4H0DSMrP0zJrAPM17JJNC2-QcKw7eL4/edit#gid=1244446072';
    //var date = "'2020-02-07'";
    $('#as_cont').sheetrock({
        url: mySpreadsheet,
        //query: "select B,C,count(B),count(C) where D = 'Si' and date'" + string_woe_date +"' >= A and A >= date'"+string_start_date+ "' group by B,C order by C",
        //query: "select B,C,E where D = 'Si' and date'" + string_woe_date +"' >= F and F >= date'"+string_start_date+ "' order by B",
        query: "select A,D,H where G = 'Si' and date'" + string_woe_date +"' >= E and E >= date'"+string_start_date+ "' order by D",
        callback: (error, options = {}, response = {}) => {
            if (!!error) {
              console.log('error', error);
              return;
            }
            const { attributes, raw, rows, html } = response || {};
            console.log('tu mama', response);
            
            const PJArray = rows.map((row, index) => {
                const { cellsArray, labels} = row;
                if (index === 0) { return 0;}

            })

            console.log('PJArray', PJArray);
            response.html='';
        },
        rowTemplate: (row) => {
            const { cellsArray, labels} = row;

            let fontSize = 90;

            const name = cellsArray[0];
            const job = cellsArray[1];
            const gvg = cellsArray[2];

            normal_name = noTilde(name.toLowerCase())
            console.log(normal_name)
            if (!inscritos_name.has(normal_name)){
             
                inscritos_name.add(normal_name)

                if (name.length > 10) {
                    fontSize = 80;
                }
                if (name.length > 20) {
                    fontSize = 40;
                }

                let { imgUrl, bg_color = 'white' } = imgAndColor(job);
                
                if (gvg.localeCompare("No") == 0){
                    return  `<div class="pj"><div class="job-image"><img src="${imgUrl}" width="35" height="35"></div><div class="pj-name" style="font-size:${fontSize}%">${name}</div><div class="job-name-2" style="background-color: ${bg_color};">${job}</div></div>`;
                }
                else {
                    return  `<div class="pj"><div class="job-image"><img src="${imgUrl}" width="35" height="35"></div><div class="pj-name" style="font-size:${fontSize}%">${name}</div><div class="job-name" style="background: ${bg_color} none repeat scroll 0% 0%;">${job}</div></div>`;
                }  
            }
            return ''
        }
      }
    );
}

var drake = dragula({
  });
  drake.containers.push(document.getElementById('as_cont'));
  drake.containers.push(document.getElementById('pt1-integrantes'));
  drake.containers.push(document.getElementById('pt2-integrantes'));
  drake.containers.push(document.getElementById('pt3-integrantes'));
  drake.containers.push(document.getElementById('pt4-integrantes'));
  drake.containers.push(document.getElementById('pt5-integrantes'));
  drake.containers.push(document.getElementById('pt6-integrantes'));
  drake.containers.push(document.getElementById('pt7-integrantes'));
  drake.containers.push(document.getElementById('pt8-integrantes'));
  drake.containers.push(document.getElementById('pt9-integrantes'));
  drake.containers.push(document.getElementById('pt10-integrantes'));
  drake.containers.push(document.getElementById('pt11-integrantes'));
  drake.containers.push(document.getElementById('pt12-integrantes'));
  drake.containers.push(document.getElementById('pt13-integrantes'));
  drake.containers.push(document.getElementById('pt14-integrantes'));
  drake.containers.push(document.getElementById('pt15-integrantes'));
  
var drake2 = dragula({
    copy: function (el, source) {
        console.log=source;
        return source.id == 'roles';
      },
    accepts: function(el, target, source, sibling) {
        return target.id != 'roles'; 
    },
    removeOnSpill: true
});
drake2.containers.push(document.getElementById('roles'));
drake2.containers.push(document.getElementById('pt1-role'));
drake2.containers.push(document.getElementById('pt2-role'));
drake2.containers.push(document.getElementById('pt3-role'));
drake2.containers.push(document.getElementById('pt4-role'));
drake2.containers.push(document.getElementById('pt5-role'));
drake2.containers.push(document.getElementById('pt6-role'));
drake2.containers.push(document.getElementById('pt7-role'));
drake2.containers.push(document.getElementById('pt8-role'));
drake2.containers.push(document.getElementById('pt9-role'));
drake2.containers.push(document.getElementById('pt10-role'));
drake2.containers.push(document.getElementById('pt11-role'));
drake2.containers.push(document.getElementById('pt12-role'));
drake2.containers.push(document.getElementById('pt13-role'));
drake2.containers.push(document.getElementById('pt14-role'));
drake2.containers.push(document.getElementById('pt15-role'));

function init() {
    let today = new Date().toISOString().slice(0, 10);
    document.getElementById('fecha').innerText = today;
    narmoLaLleva();
}

function noTilde (s) {
    if (s.normalize != undefined) {
        s = s.normalize ("NFKD");
    }
    return s.replace (/[\u0300-\u036F]/g, "");
}

init();
