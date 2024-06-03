document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Initial theme
    body.classList.add('light-mode');

    toggleButton.addEventListener('click', () => {
        console.log('Button clicked!');
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        console.log('Current mode:', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Languages array
    const languages = ['Hello!', 'Hola!', 'Bonjour!', 'Hallo!', 'Ciao!', 'こんにちは!', '안녕하세요!', 'Привет!', '你好!', 'مرحبا!'];
    let currentIndex = 0;
    const greetingElement = document.getElementById('index-h1');

    // Function to switch greetings with scrolling effect
    function switchGreeting() {
        // Add the scroll-out animation
        greetingElement.classList.add('scroll-out');

        // Update the text after the scroll-out animation
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % languages.length;
            greetingElement.textContent = languages[currentIndex];

            // Remove the scroll-out class and add the scroll-in class
            greetingElement.classList.remove('scroll-out');
            greetingElement.classList.add('scroll-in');

            // Remove the scroll-in class after the animation completes
            setTimeout(() => {
                greetingElement.classList.remove('scroll-in');
            }, 750); // Same as the animation duration
        }, 750); // Same as the animation duration
    }

    // Set interval to switch greeting every 3 seconds
    setInterval(switchGreeting, 3000);
});
