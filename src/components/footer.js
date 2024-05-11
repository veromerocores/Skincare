export default function Footer() {
    return(
        <footer>
            <div class="line"></div>
            <div class="footcontent">
                <div class="footlists">
                    <div>
                        <ul class="lista" onclick="window.location.href = 'about.html';">About</ul>
                        <ul class="lista" onclick="window.location.href = 'about.html';">Get in touch</ul>
                        <ul class="lista" onclick="window.location.href = 'about.html';">Newsletter</ul>
                    </div>
                    <div>
                        <ul class="lista" onclick="window.location.href = 'homepage.html';">Yoga poses</ul>
                        <ul class="lista" onclick="window.location.href = 'wisdom.html';">Wisdom</ul>
                        <ul class="lista" onclick="window.location.href = 'meditation.html';">Meditation(beta)</ul>
                    </div>
                    <div>
                        <ul class="lista" onclick="window.location.href = 'homepage.html';">Search</ul>
                        <ul class="lista" onclick="window.location.href = 'about.html';">Careers</ul>
                        <ul class="lista" onclick="window.location.href = 'index.html';">Get started</ul>
                    </div>
                </div>
                <p>FroGa</p>
            </div>
        </footer>
    );
}