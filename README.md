# 🕒 Dynamic Time-Table Generator

## 📝 Description

This project is a web application built with .NET MVC / .NET Core that dynamically generates a time-table based on user input. The system collects information about working days, subjects, and hours, and automatically creates a schedule.

## 🚀 Features

- Collects user inputs for:

  - 📅 **Number of Working Days:** Positive number between 1 to 7
  - 📘 **Number of Subjects per Day:** Positive number less than 9
  - 🔢 **Total Subjects:** Positive number

- 🧮 Auto-calculates total hours for the week using the formula:

  `Total hours for week = No of Working days x No of Subjects per day`

- ✅ After total hours are calculated, users can submit the data to generate a new form where they allocate hours for each subject.

- 🔒 The system validates that the sum of all subject hours equals the total hours for the week.

- ✨ A "Generate" button appears once the subject hours are correctly entered.

## 📊 Timetable Generation Logic

The app dynamically places subjects in a timetable grid based on the entered subject hours.

### 📚 Example:

- **Working Days:** 5
- **Subjects per Day:** 4
- **Total Subjects:** 4

| 🟩 Monday | 🟨 Tuesday | 🟧 Wednesday | 🟪 Thursday | 🟥 Friday |
| --------- | ---------- | ------------ | ----------- | --------- |
| Gujarati  | Maths      | Science      | Science     | Gujarati  |
| English   | Maths      | Maths        | Maths       | English   |
| Science   | Gujarati   | English      | English     | Science   |
| Maths     | Science    | Maths        | Science     | Maths     |

## 🛠️ Tech Stack

- 🖥️ **Frontend:** HTML, CSS, JavaScript (optional for dynamic interactions)
- 🏗️ **Backend:** .NET MVC / .NET Core

## ⚡ Installation

1. 🛜 Clone the repository:

   ```sh
   git clone <jaiminpatel047/DynamicTimeTableGenerator>
   cd dynamic-timetable-generator
   ```

2. 📂 Restore dependencies:

   ```sh
   dotnet restore
   ```

3. ▶️ Build and run the project:

   ```sh
   dotnet run
   ```

4. 🌐 Open the app in your browser at: `http://localhost:44383`

## 🟢 Usage

1. ✏️ **Step 1:** Enter the required inputs for working days, subjects, and subject hours.

2. 🕵️ **Step 2:** Review the calculated total weekly hours.

3. 🧑‍🏫 **Step 3:** Fill in hours for each subject (must match total weekly hours).

4. 🔘 **Step 4:** Click the "Generate" button to see the final timetable.

## 🤝 Contributions

Contributions are welcome! Feel free to fork the project and submit a pull request.

## 📜 License

This project is open-source under the MIT License.


