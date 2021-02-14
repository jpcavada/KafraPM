function imgAndColor(job) {   
    switch (job) {
        case 'Arcane Master':
            return {
                imgUrl:'https://imgur.com/xKqcg3K.png',
                bg_color:'blue',
            };
        case 'Beggeter':
            return {
                imgUrl:'https://imgur.com/KgjJpCb.png',
                bg_color:'orange',
            };
        case 'Chronomancer':
            return {
                imgUrl:'https://imgur.com/Yw3KJWg.png',
                bg_color:'blue',
            };
        case 'Divine Avenger':
            return {
                imgUrl:'https://imgur.com/FsEj1eV.png',
                bg_color:'crimson',
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
        case 'Luna Danceusse':
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
        case 'Spirit Summoner':
            return {
                imgUrl:'https://imgur.com/HuNtfO7.png',
                bg_color:'yellow',
            };
        case 'Stellar Hunter':
            return {
                imgUrl:'https://imgur.com/pCXZNwq.png',
                bg_color:'gold',
            };
        case 'Novice Guardian':
            return {
                imgUrl:'https://imgur.com/oUyA33t.png',
                bg_color:'lightblue',
            };
        case 'Dragon King':
            return {
                imgUrl:'https://imgur.com/cSxH85f.png',
                bg_color:'purple',
            };
        default:
            return {
                imgUrl: 'https://www.romcodex.com/icons/skill/skill_10020001.png',
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
    //var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1k1Fq3VNummYScVxnanThJSimk7YnFwaClh7Kg6cAagE/edit#gid=0';
    var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1dI1YwANc2tdgW0JgyXECB55JnZ-4bAuhdLPXNlV5NUk/edit#gid=31056058';
    $('#as_cont').sheetrock({
        url: mySpreadsheet,
        query: "select A,B,C,D where D = 'Si' order by C",
        callback: (error, options = {}, response = {}) => {
            if (!!error) {
              console.log('error', error);
              return;
            }
            /*const { attributes, raw, rows, html } = response || {};
            console.log('tu mama', response);
            
            const PJArray = rows.map((row, index) => {
                const { cellsArray, labels} = row;
                if (index === 0) { return 0;}

                //const pj = addpj(cellsArray[1], cellsArray[2]);
                //return pj;
            })

            console.log('PJArray', PJArray);
            response.html='';
            */
        },
        rowTemplate: (row) => {
            const { cellsArray, labels} = row;

            let fontSize = 90;

            const name = cellsArray[1];
            const job = cellsArray[2];
            if (name.length > 10) {
                fontSize = 80;
            }
            if (name.length > 20) {
                fontSize = 40;
            }
            const { imgUrl, bg_color = 'black' } = imgAndColor(job);

            return  `<div class="pj"><div class="job-image"><img src="${imgUrl}" width="35" height="35"></div><div class="pj-name" style="font-size:${fontSize}%">${name}</div><div class="job-name" style="background: ${bg_color} none repeat scroll 0% 0%;">${job}</div></div>`;
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


function init() {

    narmoLaLleva();
}

init();