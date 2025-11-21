 <script>
    const text = "Halo! Ini adalah efek mengetik dengan JavaScript.";
    const speed = 100; // kecepatan dalam milidetik
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  </script>
