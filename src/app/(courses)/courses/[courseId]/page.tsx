import courses from '../../../../data/courses.json'

type CourseData = {
	[level: string]: string[]
}

type Courses = {
	[course: string]: CourseData
}

// Застосуємо тип до даних курсів
const coursesData: Courses = courses

// Генерація статичних параметрів
export async function generateStaticParams() {
	return Object.keys(coursesData).flatMap(course => {
		return Object.keys(coursesData[course]).map(level => ({
			id: `${course}-${level}`, // Унікальний ідентифікатор для кожного рівня курсу
			course,
