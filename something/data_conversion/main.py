"""Программа для приведения перечня программ базового высшего образования с сайта priem.mai.ru в нужный формат"""

from json import load, dump


# Проверка количества программ
def check_count(step: int, programs: dict, count1: int) -> None:
  count2 = 0
  for program in programs.values():
    count2 += len(program["programs"])
  print(f"step{step}: count1={count1}, count2={count2}")


# Преобразование сведений о кафедрах
def match_departments() -> None:
  # Считывание данных о кафедрах и преобразовывание их номеров
  with open("departments.txt", "r", encoding="utf-8") as file:
    lines = [x.rstrip() for x in file.readlines() if not x.isspace()]
    for i in range(len(lines)):
      if "Кафедра" in lines[i]:
        lines[i] = lines[i].split()[1]

  departments = dict()
  
  # Соотнесение номеров кафедр с их названиями
  for i in range(len(lines) - 1):
    if lines[i][-1].isdigit() or lines[i][-1].istitle():
      department_number = lines[i]
      departments[department_number] = lines[i + 1]
  
  # Добавление данных о кафедрах в общую базу данных
  with open("data.json", "r", encoding="utf-8") as file:
    data = load(file)
  data["departments"] = departments
  with open("data.json", "w", encoding="utf-8") as file:
    dump(data, file, ensure_ascii=False, indent=2)
  
  print("match_departments() completed.")


# Соотнесение программ с меганаправлениями
def match_programs() -> None:
  programs = dict()
  group_number = None
  profession_name = None
  profession_number = None
  program_number = None
  programs_count = 0
  
  # Считывание данных о меганаправлениях и кафедрах
  with open("data.json", "r", encoding="utf-8") as file:
    data = load(file)
    groups = data["groups"]
    departments = data["departments"]
    
  # Считывание данных о программах и преобразование их направлений подготовки
  with open("programs.txt", "r", encoding="utf-8") as file:
    lines = [x.rstrip().split(", Базовое")[0] for x in file.readlines()]

  for i in range(len(lines) - 2):
    if (lines[i] in groups.values()):
      # Определение номера группы
      for key in groups.keys():
        if groups[key] == lines[i]:
          group_number = key
          break
      
      # Создание словаря для группы, если его нет
      if group_number not in programs.keys():
        programs[group_number] = {
          "institute_name": lines[i],
          "programs": dict()
        }

      profession_number = lines[i + 2]
      profession_name = lines[i + 1]
      program_number = len(programs[group_number]["programs"].keys())
    
    # Добавление программы подготовки по направлению
    elif any(x in lines[i] for x in ["каф.", "МСиИТ", "ТАОМ", "ТПАД", "ЭиУ"]):
      name_i = i if "." not in lines[i - 1] else i - 1
      department = lines[i].split(" каф.")[0]
      programs[group_number]["programs"][program_number] = {
        "program_name": lines[name_i - 1],
        "profession_name": profession_name,
        "profession_number": profession_number,
        "department_number": department,
        "department_name": departments[department]
      }

      program_number += 1
      programs_count += 1

  #check_count(1, programs, programs_count)
  
  print("match_programs() completed.")
  return programs
  

# Соотнесение программ с институтами
def programs_sort(programs_old: dict) -> None:    
  programs = dict()
  programs_count = 0
  
  # Считывание данных об институтах
  with open("data.json", "r", encoding="utf-8") as file:
    institutes = load(file)["institutes"]
    
  # Проход по институтам и программам
  for institute in programs_old.values():                      
    for program in institute["programs"].values():
      # Соотнесение программы с институтом
      if program["department_number"][0] == "1":               
        if len(program["department_number"].split()[0]) == 3:
          real_key = "1"
        else:
          real_key = program["department_number"][:2]
      else:
        if program["department_number"][0] in "МТЭ":
          real_key = "МТЭ"
        else:
          real_key = program["department_number"][0]
      
      # Создание словаря программ института, если его нет
      if real_key not in programs.keys():  
        programs[real_key] = {
          "institute_name": institutes[real_key],
          "institute_number": real_key,
          "programs": dict()
        }
      
      programs[real_key]["programs"][len(programs[real_key]["programs"].keys())] = program
      programs_count += 1
  
  #check_count(2, programs, programs_count)

  programs_total = []
  queue = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "И", "11", "12", "А", "С", "МТЭ")

  # Приведение институтов в нужный вид и их сортировка в нужном порядке
  for i in range(len(queue)):
    for key in programs.keys():
      if key == queue[i]:
        programs_total.append(programs[key])
  
  # Приведение программ внутри института в нужный вид и их сортировка по номерам БВО 
  for i in range(len(programs_total)):
    programs_total[i]["programs"] = sorted(
      list(programs_total[i]["programs"].values()), 
      key=lambda x: x["profession_number"]
    )

  print("programs_sort() completed.")
  return programs_total    


def main() -> None:
  if (mode := input("Match departments? [y/n] ")) == "y":
    match_departments()
  programs = match_programs()
  programs = programs_sort(programs)

  with open("result.json", "w", encoding="utf-8") as file_out:
      dump(programs, file_out, ensure_ascii=False, indent=2)


if __name__ == "__main__":
  main()
