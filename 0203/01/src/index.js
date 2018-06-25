import { internet } from 'faker';
import moment from 'moment';

let h4 = document.createElement('h4');
let el2 = document.body.appendChild(h4);

el2.setAttribute('id', 'author');
el2.setAttribute('title', 'GossJS');
el2.textContent = 'Юлия Севостьянова';

let pre = document.createElement('pre');
let el = document.body.appendChild(pre);

el.textContent += moment().format('DD.MM.YYYY hh:mm:ss');
el.textContent += '\n';
el.textContent += internet.email();
