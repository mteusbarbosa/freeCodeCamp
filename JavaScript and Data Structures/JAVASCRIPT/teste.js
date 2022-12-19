let arr = [0,0,0,0,0,0];
let arr2 = [0,0,0,0,0,0];
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;

for(let i = 0; i < 6; i++){
  value1 = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  value2 = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  value3 = Math.floor(Math.random() * (30 - 20 + 1) + 20);
  value4 = Math.floor(Math.random() * (40 - 30 + 1) + 30);
  value5 = Math.floor(Math.random() * (50 - 40 + 1) + 40);
  value6 = Math.floor(Math.random() * (60 - 50 + 1) + 50);
  
  console.log(arr + "  -- Primeiro");
  console.log(value1 + "," + value1  + "  -- Primeiro");
  value1 = Math.floor((arr[0] + value1)/2);
  value2 = Math.floor((arr[1] + value2)/2);
  value3 = Math.floor((arr[2] + value3)/2);
  value4 = Math.floor((arr[3] + value4)/2);
  value5 = Math.floor((arr[4] + value5)/2);
  value6 = Math.floor((arr[5] + value6)/2);

  for(let j = 0; j<6; j++){
    arr.shift();  
  };
  console.log(arr + "  -- Segundo");
  console.log(value1 + "," + value1  + "  -- Segundo");
  
  arr.push([value1],[value2],[value3],[value4],[value5],[value6]);
  console.log(arr + "  -- Terceiro");
  console.log(value1 + "," + value1  + "  -- Terceiro");

  //console.log(value1 + ', ' + value2 + ', ' + value3 + ', ' + value4 + ', ' + value5 + ', ' + value6);  
}

console.log(arr);
