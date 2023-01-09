import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { AttemptedAssignment } from './pages/SP20-BCS-071/AttemptedAssignment';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Appbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ p: 2 }}>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					TCS Assignment
				</Typography>
			</AppBar>
		</Box>
	);
};

export default function App() {
	return (
		<>
			<Appbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/SP20-BCS-071' element={<AttemptedAssignment />} />
			</Routes>
		</>
	);
}

const Home = () => {
	return (
		<>
			<Container maxWidth='sm'>
				<Box sx={{ my: 4 }}>
					<Stack spacing={2}>
						<Link to='/SP20-BCS-071'>
							<Item>Muhammad Touseef (SP20-BCS-071) </Item>
						</Link>
						<Item>Item 2</Item>
						<Item>Item 3</Item>
					</Stack>
				</Box>
			</Container>
		</>
	);
};

const AttemptQuiz = ({ sid, qid, courseCode }) => {
	//MohsinAli and Abdur-Rehman
	const navigate = useNavigate();
	const [questions, setQuestions] = useState({});
	const [selectedQuestions, setSelectedQuestions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/view-quiz/${qid}` //sp20-bcs-053 (Mohsin Ali)
				);
				const json = await response.json();
				setQuestions(json);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleAnswers = (index, e) => {
		const selectedAnswer = e.target.value;
		var arr = selectedQuestions;
		arr[index] = selectedAnswer;
		setSelectedQuestions(arr);
	};

	const handleSubmit = async e => {
		try {
			e.preventDefault();
			var score = 0;
			for (let index = 0; index < questions.questions.length; index++) {
				if (
					selectedQuestions[index] ===
					questions.questions[index].correctAnswer
				) {
					score = score + 1;
				}
			}

			const response = await fetch(
				`http://localhost:4000/students/attemptQuiz`,
				{
					method: 'PATCH',
					body: JSON.stringify({
						sid,
						qid,
						score,
						code: courseCode,
					}),
				}
			);
			const json = await response.json();
			if (response.status === 500) {
				setError('Something went Wrong');
			}
			if (json.message === 'Successfully Entered Marks') {
				navigate('/student-dashboard');
			}
		} catch (e) {
			setError(e);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div>
			<h1>{questions.title}</h1>
			<form onSubmit={handleSubmit}>
				{questions.questions.map((elem, index) => (
					<div key={elem.question}>
						<p>{elem.question}</p>
						<div>
							<fieldset>
								{elem.answers.map(min_elem => (
									<label key={min_elem}>
										<input
											type='radio'
											name={elem.question}
											value={min_elem}
											onChange={e =>
												handleAnswers(index, e)
											}
										/>
										{min_elem}
									</label>
								))}
							</fieldset>
						</div>
					</div>
				))}
				<button type='submit' onClick={handleSubmit} className='button'>
					Submit
				</button>
			</form>
		</div>
	);
};
