export default function Footer() {
    return(
        <footer>
            <div className="line"></div>
            <div className="footcontent">
                <div className="footlists">
                    <ul>
                        <li>
                            <a href="/home" className="lista">Get Started</a>
                        </li>
                        <li>
                            <a href="/questionnaire" className="lista">Questionnaire</a>
                        </li>
                        <li>
                            <a href="/planner" className="lista">Skincare Planner</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/search" className="lista">Product Search</a>
                        </li>
                        <li>
                            <a href="/about" className="lista">About</a>
                        </li>
                        <li className="lista">Privacy Policy and Terms of Use</li>
                    </ul>
                </div>
                <p>SkinPlan</p>
            </div>
        </footer>
    );
}