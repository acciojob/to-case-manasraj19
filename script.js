function toCase(text) {
  if (text.length > 0) {
    const lowercase = text.toLowerCase();
    const uppercase = text.toUpperCase();
    return `${lowercase}-${uppercase}`;
  } else {
    return '-';
  }
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));