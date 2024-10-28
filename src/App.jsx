import "./App.css";
import { PersonalInfo } from "./components/PersonalInfo";
import { EducationalInfo } from "./components/EducationalInfo";
import { JobInfo } from "./components/JobInfo";

function App() {
	return (
		<>
			<PersonalInfo />
			<EducationalInfo />
			<JobInfo />
		</>
	);
}

export default App;
