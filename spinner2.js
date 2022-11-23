const spinArray = [`|`, `/`, `-`, `\\`, `|`, `/`, `-`, `\\`, `|`, '\n'];
let timer = 100;
for (const spin of spinArray) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, timer);
  timer += 200;
}