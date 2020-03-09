let selectorColor = Math.random();
console.log(selectorColor);
let color = '';
if (selectorColor <= 0.25) {
  color = 'rojo';
} else if (selectorColor > 0.25 && selectorColor <= 0.5) {
  color = 'verde';
} else if (selectorColor > 0.5 && selectorColor <= 0.75) {
  color = 'amarillo';
} else {
  color = 'azul';
}
coloresSimon.push(color);
selectorColor = Math.random();
console.log(selectorColor);
color = '';
if (selectorColor <= 0.25) {
  color = 'rojo';
} else if (selectorColor > 0.25 && selectorColor <= 0.5) {
  color = 'verde';
} else if (selectorColor > 0.5 && selectorColor <= 0.75) {
  color = 'amarillo';
} else {
  color = 'azul';
}
coloresSimon.push(color);
console.log(coloresSimon);
let i = 0;
pront = pront('Color?');
let ganamos = true;
if (coloresSimon[i] !== pront) {
  ganamos = false;
}
/*
i = i+1;
i += 1;
i++;
*/
i++;
pront = pront('Color?');
if (coloresSimon[i] !== pront) {
  ganamos = false;
}
i++;
pront = pront('Color?');
if (coloresSimon[i] !== pront) {
  ganamos = false;
}
i++;
pront = pront('Color?');
if (coloresSimon[i] !== pront) {
  ganamos = false;
}
i++;
pront = pront('Color?');
if (coloresSimon[i] !== pront) {
  ganamos = false;
}
i++;
pront = pront('Color?');
if (coloresSimon[i] !== pront) {
  ganamos = false;
}
if (ganamos === true) {
  alert('Ganaste');
} else {
  alert('LOOSER');
}