# Лабораторные работы


## №7 | Нам
### Вариант №14
```
*1 -> z
*0 -> *
z1 -> 1z
z0 -> 1z
z~ -> ~v
v1 -> 1v
v0 -> 0v
0v -> b
1v -> a
1b -> b1
0b -> b0
1a -> a1
0a -> a0
~a -> ~1
~b -> ~0
a -> 1
b -> 0
*~ -> 0q
q0 -> q
0q1 ->. 1
0q ->. 0
 -> *
```


### Вариант №25
```
!0 -> !
>0 -> 0>
>1 -> 1>
>2 -> 2>
>3 -> 3>
>4 -> 4>
>5 -> 5>
>6 -> 6>
>7 -> 7>
>8 -> 8>
>9 -> 9>
>A -> A>
>B -> B>
>C -> C>
>D -> D>
>E -> E>
>F -> F>
> -> ?

0? -> 1
1? -> 2
2? -> 3
3? -> 4
4? -> 5
5? -> 6
6? -> 7
7? -> 8
8? -> 9
9? -> A
A? -> B
B? -> C
C? -> D
D? -> E
E? -> F
F? -> ?0

! ->.
 -> !>
```


### Неопознанное №1
От автора
> Проверка на палиндром. Но тут только для а и b. Я с диска брала, но немного переписала. Вроде работает

Код
```
##a->a##  
##b->b##  
##c->c##  
a(a)->(a)a  
b(a)->(a)b  
c(a)->(a)c  
a(b)->(b)a  
b(b)->(b)b  
c(b)->(b)c  
a(c)->(c)a  
b(c)->(c)b  
c(c)->(c)c  
#(a)->a#  
#(b)->b#  
#(c)->c#  
a#->(a)#  
b#->(b)#  
c#->(c)#
(b)(b) -> 
(b)(a) -> !
(a)(b) -> !
(a)(a) ->      
##->0  
!! -> !
1!0 ->.NO
10 ->.YES  
->1##
```


### Неопознанное №2
От автора
> Записаны два числа разделенные `<` сделать логический сдвиг влево на число разрядов равное второму числу

Код
```
0! -> !1 
1! -> 0H 
! -> * 
*0 -> * 
*1 -> * 
*< -> ( 
(0 -> ( 
(1 -> 1 
( -> 0 
H0 -> 0H 
H1 -> 1H 
H< -> <# 
#1 -> @ 
#0 -> @ 
@0 -> 0@ 
@1 -> 1@ 
@ -> 0 
< -> !<
```


### Неопознанное №3
От автора
> Реверс троичного числа

Код
```
*00 -> *0
*01 -> *1
*02 -> *2
*#) -> #0<
*#! -> #1<
*#@ -> #2<
<) -> 0<
<! -> 1<
<@ -> 2<
< -> >
0> -> >0
1> -> >1
2> -> >2
#>0 -> #>
#>1 ->. 1
#>2 ->. 2
*#0 -> #)
*1 -> #!
*2 -> #@
*#1 -> #!
*#2 -> #@
)0 -> 0)
)1 -> 1)
)2 -> 2)
!0 -> 0!
!1 -> 1!
!2 -> 2!
@0 -> 0@
@1 -> 1@
@2 -> 2@
*0 ->. 0
 -> *
```


### Неопознанное №4
От автора
> Умножение в натуральной системе счисления

Код
```
1a->ab1
ab->b
1b->b1 
#1->a#
1#->#
#->c
bc->c1
c->.
```


### Неопознанное №5
От автора
> Написать НАМ построения машинного слова по заданной двоичной маске
> Дана маска и число, и нужно сделать конъюнкцию маски и числа

Код
```
*10 -> 0*1  
*00 -> 0*0  
*11 -> 1*1  
*01 -> 1*0  
1*1# -> #1  
1*0# -> #0  
0*1# -> #0  

0*0# -> #0  
1*1 -> #1  
1*0 -> #0  
0*1 -> #0  
0*0 -> #0  
1& -> &*1  
0& -> &*0  
&# ->  
!0 ->  
!1 ->. 1  
! ->. 0  
 -> !
```


### Неопознанное №6
От автора
> НАМ вычисление логического произведения двух чисел, разделенных «&&»

Код
```
&& -> &!
0& -> &
1& -> @
0@ -> @
1@ -> @
!0 -> !
!1 -> #
#1 -> #
#0 -> #
@! ->. 0
&# ->. 0
&! ->. 0
@# ->. 1
```


### Неопознанное №7
От автора
> составить алгоритм натурализации десятичного числа в позиционной записи (перевода в унарную систему счисления {|}) 

Код
```
 1<*->0>*
2<*->1>*
3<*->2>*
4<*->3>*
5<*->4>*
6<*->5>*
7<*->6>*
8<*->7>*
9<*->8>*
>*0*->9>*
>1*->1*>
>*0 ->9>|


0<-><*0


1<->0<|
2<->1<|
3<->2<|
4<->3<|
5<->4<|
6<->5<|
7<->6<|
8<->7<|
9<->8<|

>1->1>
>2->2>
>3->3>
>4->4>
>5->5>
>6->6>
>7->7>
>8->8>
>9->9>
>0->0>

-<->!>-
!>-*0->!>-
!>-|->.-|

!>-->0

!>!|->.| 
 <->!>!
!>!*0->!>!
!>!->0!
0!->.

> -><

0->0>
1->1>
2->2>
3->3>
4->4>
5->5>
6->6>
7->7>
8->8>
9->9>
```


### Неопознанное №8
От автора
> Входное сообщение представляет собой два слова, разделенных `|`. Первое слово состоит из латинских маленьких букв и знака `?`, второе только из маленьких букв, проверить, подходит ли число под маску, по принципу, на месте знака `?` Может стоять любой символ.
> Только на истину работает. Как прописать вывод ответа, когда слово не подходит под маску, хз

Код
```
#a -> a#
#b -> b#
#c -> c#
a(a) -> (a)a
b(a) -> (a)b
c(a) -> (a)c
a(b) -> (b)a
b(b) -> (b)b
c(b) -> (b)c
a(c) -> (c)a
b(c) -> (c)b
c(c) -> (c)c
!(a) -> a!
!(b) -> b!
!(c) -> c!
a# -> (a)#
b# -> (b)#
c# -> (c)#
a|a -> |
b|b -> |
c|c -> |
!#| -> |
a|? ->.YES
b|? ->.YES
c|? ->.YES
-> !#
```



## №12 | Си
### Вариант №4
```c
#include <stdio.h>
int main(void) {
    long long a;
    int b = 0;
    while (scanf("%lld", &a) == 1) {
        int a1, a2, a3;
        a1 = a % 10;
        a = a / 10;
        a2 = a % 10;
        a = a / 10;
        a3 = a % 10;
        a = a / 10;
        while (a != 0) {
            if (a1 + a2 == a3) {
                printf("%d ", a3);
                b=1;
            }
            a1 = a2;
            a2 = a3;
            a3 = a % 10;
            a = a / 10;
        }
        if (a1 + a2 == a3) {
            b=1;
            printf("%d ", a3);
        }
    }
    if (b==0) {
        printf("не гоол(нет таких)");
    }
}
```


### Вариант №7
```c
#include <stdio.h>

void binary(unsigned int number) {
    for (int i = sizeof(number)*8 -1; i >= 0; i--) {
        printf("%d", (number >> i) & 1);
    }
    printf("\n");
}

int main() {
    int num;
    printf("Write the number: ");
    while (scanf("%d", &num) != EOF) {
        if (num < 0) {
            unsigned int comp = (unsigned int)(-num);
            comp = ~comp + 1;
            printf("Additional code of %d: ", comp);
            binary(num);
        } else if (num == 0) {
            printf("Additional code of %d: ", num);
            binary(0);
        } else {
            printf("No additional code for positive numbers\n");
        }
    }
      
    return 0;
}
```


### Вариант №10
```c
#include <stdio.h>



int length(int a) {
    int l = 0;
    while (a != 0) {
        l++;
        a = (a / 10);
    }
    return l;
}
long long power(int a, int b) {
    long long num = 1;
    while (b != 0) {
        num = num * a;
        --b;
    }
    return num;
}


int main() {
    int maxNum = 2147483647;
    int minNum = -2147483648;
    long long number;
    while (scanf("\n%lld", &number) != EOF) {
        if (number == 0) {
            printf("Ответ: %d\n", 0);
        } else {
            if ((number > minNum) & (number < maxNum)) {
                int m = number;
                int len = length(number);
                while (len != 1) {
                    number = number / 10;
                    --len;
                }
                int s = length(m) - 1;
                m = m - (number * power(10, s));
                long long g;
                g = m * 10 + number;
                if (g > maxNum || g < minNum) {
                    printf("Ошибка\n");
                } else {
                    printf("Ответ: %lld\n", g);
                }
            } else {
                printf("Ошибка\n");
            }
        }
    }
}
```


### Вариант №11
```c
#include <stdio.h>

int getLength(int n) { // находим длину числа
  int res = 0;
  while (n != 0) {
    n = n / 10;
    res++;
  }
  return res;
}

long long inPow(int l) { // возведение числа 10 в степень
  long long result = 1;
  for (int i = 0; i < l - 1; i++) {
    result = result * 10;
  }
  return result;
}

int main() {
  long long num;
  int maxInt = 2147483647;
  printf("Введите число от -2147483648 до 2147483647\n");
  while (scanf("\n%lld", &num) != EOF) { // получаем адрес переменной
    if (num > maxInt || num < (-maxInt - 1)) {
      printf("Неверные данные\n");
    } else {
      int buf = num % 10;
      int leng = getLength(num);
      num /= 10;
      if (buf == 0 && num != 0) {
        printf("Результат: %lld\n", num);
      } else {
        num = buf * inPow(leng) + num;
        if (num > maxInt || num < (-maxInt - 1)) {
          printf("Случилось переполнение \n");
        } else {
          printf("Результат: %lld\n", num);
        }
      }
    }
  }
}
```


### Вариант №14
```c
#include <stdio.h>
#include <stdbool.h>
#include <math.h>

int main() {
    int a;
    int first;
    int second;
    int *ptr;
    bool isIdentical = false;
    while (scanf("%d", &a) == 1) {
        isIdentical = false;
        a = abs(a);
        first = a % 10;
        a = a / 10;
        if (a > 0) {
            while (a > 0) {
                second = a % 10;
                a = a / 10;
                if (first == second) {
                    isIdentical = true;
                    printf("True \n");
                    break;
                }

            ptr = &second;
            first = *ptr;
            }
        }

        if (isIdentical == false) {
            printf("False \n");
        }
    }

    return 0;
}
```


### Вариант №24
```c
#include <stdio.h>

int main()
{
    long long int inputNumber, outputNumber = 0, n;
    int interDigit, sign = 1;
    while (scanf("%lld", &inputNumber) != EOF) {
        sign = 1;
        outputNumber = 0;
        n = 1;
        if (inputNumber > 9223372036854775807 || inputNumber < -9223372036854775807) {
            printf("Превышены размеры памяти, получить верный ответ невозможно \n");
        } else {
            if (inputNumber < 0) {
                sign = -1;
                inputNumber = inputNumber * sign;               
            }

            if (inputNumber == 0) {
                outputNumber = 1;
            } else {
                while (inputNumber != 0) {
                    interDigit = inputNumber % 10;
                    if (interDigit % 2 == 0) {
                    interDigit += 1;
                    }

                    inputNumber = inputNumber / 10;
                    outputNumber = outputNumber + interDigit * n;
                    n *= 10;
                }

            }

            outputNumber = outputNumber * sign;
            if ((outputNumber >= inputNumber && sign == 1) || (outputNumber <= inputNumber && sign == -1)) {
                printf("%lld \n", outputNumber);
            } else {
                printf("Превышены размеры памяти, получить верный ответ невозможно \n");            
            }  

        }
    }
}
```


### Вариант №29
```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    long long a, c, check;

    while (1) {
        long long minus = 0;
        check = scanf("%lld", &a);

        if (check == -1)
            return 0;

        if (a < 0) {
            a = a * -1;
            minus = 1;
        }

        long long ans = 0, leadingZero = 0, cnt = 1;

        if (a == 0) {
            printf("00\n");
            continue;
        }

        while (a != 0) {
            c = a % 10;
            a = a / 10;
            if (c == 8) {
                ans += 10 * cnt;
            }
            else if (c == 9) {
                ans += 11 * cnt;
            }
            else {
                if (a == 0)
                    leadingZero = 1;
                ans += c * cnt;
            }
            cnt *= 100;
        }

        if (ans == 0) {
            printf("Empty input\n");
            continue;
        }
        if (minus == 1){
            printf("-");
        }
        if (leadingZero == 0)
            printf("%lld\n", ans);
        else
            printf("0%lld\n", ans);
    }
    return 0;
}
```



## №15 | Си
### Вариант №9
```c
#include <stdio.h>

int mod(int a, int b) {
    return (a % b + b) % b;
}

int main() {
    int n;
    int move = 113;
    printf("Введите размер квадратной матрицы 1 <= n <= 8: ");
    while (scanf("%d", &n) != EOF) {
        printf("\n");
        if (n > 8 || n < 1) {
            printf("Некорректный размер матрицы.\n");
        } else {
            int matr[n][n];
            move = mod(move, n * n);

            printf("Введите элементы матрицы: ");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    scanf("%d", &matr[i][j]);
                }
            }

            printf("\nРезультирующая матрица: \n");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    int index = (i * n + j - move + n * n) % (n * n);
                    int row = index / n;
                    int col = index % n;

                    printf("%d ", matr[row][col]);
                }
                printf("\n");
            }
            printf("\n");
        }
        printf("Введите размер квадратной матрицы 1 <= n <= 8: ");
    }
    return 0;
}
```


### Вариант №19
```c
#include <stdio.h>

int main() { // икс это строка, игрек это столбец
  int mas[7][7], count = 0, size, flag = 0, leftY, rightY, maxY;
  while(1){
        scanf("%d", &size);
        if (size == 0 || size == EOF){
            return 0;
        }
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                scanf("%d", &mas[i][j]);
            }
        }

        int leftY = 0, rightY = size - 1;
        for (int i = 0; i < size; i++) {
            int maxY = mas[i][0];
            for (int j = 0; j < size; j++) {
                if (mas[i][j] > maxY) {
                    maxY = mas[i][j];
                }
            }
            mas[i][leftY] = maxY;
            mas[i][rightY] = maxY;
            leftY += 1;
            rightY -= 1;
        }

        printf("\n");

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                printf("%d ",mas[i][j]);
            }  
            printf("\n");
        }
    }
}
```


### Вариант №20
```c
#include <stdio.h>

void isChangeMatrix(int c) {
    if ((c <= 0) || (c > 8)) {
        printf("Некорректный размер матрицы.\n");
    }
    int mat[c][c];
    int nums[c];
    
    for (int j = 0; j < c; j++) {
        nums[j] = 0;
    }

    for (int i = 0; i < c; i++) {
        for (int j = 0; j < c; j++) {
        scanf("%d", &mat[i][j]);
        }
    }

    for (int j = 0; j < c; j++) {
        for (int i = 0; i < c; i++) {
        nums[j] += mat[i][j];
        }
    }

    int min = mat[0][0];
    for (int i = 0; i < c; i++) {
        for (int j = 0; j < c; j++) {
        if (mat[i][j] < min) {
            min = mat[i][j];
            }
        }
    }

    for (int i = 0; i < c; i++) {
        for (int j = 0; j < c; j++) {
        if (mat[i][j] == min) {
            mat[i][j] = nums[j];
            }
        }
    }

    printf("Ответ:\n");
    for (int i = 0; i < c; i++) {
        for (int j = 0; j < c; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\n");
    }
}


int main() {
    int c;
    printf("Введите размер матрицы:");
    scanf("%d", &c);
    isChangeMatrix(c);
    return 0;
}
```


### Вариант №22
```c
#include <stdio.h> 
#include <stdbool.h> 
 
int* element(int *arr, int i, int j) { 
    return &(arr[i * 8 + j]); 
} 
 
void read(int *arr, int *n) { 
    scanf("%d", n); 
    for (int i = 0; i < *n; i++) { 
        for (int j = 0; j < *n; j++) { 
            scanf("%d", element(arr, i, j)); 
        } 
    } 
} 
 
int findMin(int *arr, int n) { 
    int ans = -1, v = 0; 
    for (int i = 0; i < n; i++) { 
        for (int j = 0; j < n; j++) { 
            if (v == 0) { 
                ans = *element(arr, i, j); 
                v = 1; 
            } else { 
                if (ans > *element(arr, i, j)) { 
                    ans = *element(arr, i, j); 
                } 
            } 
        } 
    } 
    return ans; 
} 
 
void print(int *arr, int n) { 
    for (int i = 0; i < n; i++) { 
        for (int j = 0; j < n; j++) { 
            printf("%d ", *element(arr, i, j)); 
        } 
        printf("\n"); 
    } 
} 
 
int* task(int *arr, int n) { 
    int minElement = findMin(arr, n); 
    for (int i = 0; i < n; i++) { 
        int row[8]; 
        int go = n - 1, find = 0; 
        for (int j = 0; j < n; j++) { 
            row[go] = *element(arr, i, j); 
            go -= 1; 
            if (*element(arr, i, j) == minElement) { 
                find = 1; 
            } 
        } 
        go = 0; 
        if (find == 1) { 
            for (int j = 0; j < n; j++) { 
                *element(arr, i, j) = row[go]; 
                go += 1; 
            } 
        } 
    } 
    return &(arr[8 * 8]); 
} 
 
int main() { 
    int arr[8 * 8]; 
    int n; 
    read(arr, &n); 
    task(arr, n); 
    printf("\n"); 
    print(arr, n); 
    printf("\n"); 
    return 0; 
}
```


### Вариант №24
```c
#include <stdio.h>
#define MAX_SIZE 8
#define INT_MAX 2147483647

int main(void) {
    int n, arr[MAX_SIZE][MAX_SIZE], ok, minimum = INT_MAX;

    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &arr[i][j]);
            if (arr[i][j] < minimum)
                minimum = arr[i][j];
        }
    }

    for (int i = n - 1; i >= 0; i--) {
        ok = 0;
        for (int j = 0; j <= n - 1; j++) {
            if (arr[j][i] == minimum) {
                ok = 1;
                break;
            }
        }

        if (ok == 1) {
            int ans = 1;
            for (int j = 0; j <= n - 1; j++) {
                ans *= arr[j][i];
            }

            printf("%d", ans);
            return 0;
        }
    }

    return 0;
}
```


### Вариант №28
```c
#include <stdio.h>
#include <stdbool.h>


int RemoveRepeat(int rows, int cols, int matrix[rows][cols]) {
    int UniqueCols = cols;
        for (int i = 0; i < UniqueCols; i++) {
            bool IsRepeat = false;
            for (int j = i + 1; j < UniqueCols; j++) {
                bool isEqual = true;
                for (int row = 0; row < rows; row++) {
                    if (matrix[row][i] != matrix[row][j]) {
                        isEqual = false;
                        break;
                    }
                }
                if (isEqual) {
                         for (int row = 0; row < rows; row++)
                         {
                             for (int k = j; k < UniqueCols - 1; k++)
                            {
                                matrix[row][k] = matrix[row][k + 1];
                             }
                         }

                         UniqueCols--;
                        j--;
                    IsRepeat = true;
                }
            }
        }

    return UniqueCols;
}

int main() {
    int rows, cols;

    printf("Количество строк: ");
    scanf("%d", &rows);

    printf("Количество столбцов: ");
    scanf("%d", &cols);

    int matrix[rows][cols];

    printf("Элементы матрицы:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    int uniqueCols = RemoveRepeat(rows, cols, matrix);

    printf("Ответ:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < uniqueCols; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}
```


### Вариант №29
```c
#include <stdio.h>

int main() {
    int matrixSize;
    while (scanf("%d", &matrixSize) == 1) {
        if ((matrixSize > 8) || (matrixSize < 1)) { // По условию
            printf("Error! Incorrect matrix");
            break;
        }
        int element[matrixSize][matrixSize];
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                scanf("%d", &element[i][j]);
            }
        }
        printf("Matrix before:\n"); // на случай, если криво вводили
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                printf("%d ", element[i][j]);
            }
            printf("\n");
        }
        int min = element[0][0], max = element[0][0];
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                if (element[i][j] > max) {
                    max = element[i][j];
                }
                if (element[i][j] < min) {
                    min = element[i][j];
                }
            }
        }
        int maxPosition[matrixSize], stringWithMinimal[matrixSize], isMinimalFound = 0;
        for (int i = 0; i < matrixSize; i++) {
            maxPosition[i] = 0;
        }
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                if (element[i][j] == max) {
                    maxPosition[i] = 1;
                }
                if ((element[i][j] == min) && (isMinimalFound == 0)) {
                    isMinimalFound = 1;
                    for (int k = 0; k < matrixSize; k++) {
                        stringWithMinimal[k] = element[i][k];
                    }
                    break;
                }
            }
        }
        for (int i = 0; i < matrixSize; i++) {
            if (maxPosition[i] == 1) {
                for (int j = 0; j < matrixSize; j++) {
                    element[i][j] = stringWithMinimal[j];
                }
            }
        }
        if (matrixSize == 1) {
            printf("Final matrix:\n");
            printf("%d\n", element[0][0]);
            continue;
        }
        printf("Final matrix:\n");
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                printf("%d ", element[i][j]);
            }
            printf("\n");
        }
    }
    return 0;
}
```


### Вариант №31
```c
#include <stdio.h>
#define MAX_SIZE 8

int main() {
    int matr[MAX_SIZE][MAX_SIZE];
    int n;
    int AmountOfRows = 0;
    scanf("%d", &n);
    if (n > MAX_SIZE) {
        printf("The size is bigger than Max size");
        return 1;
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &matr[i][j]);
        }
    }
    int Min = matr[0][0];
    int Max = matr[0][0];
    printf("\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matr[i][j] < Min) {
                Min = matr[i][j];
            } 
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matr[i][j] > Max) {
                Max = matr[i][j];
            } 
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matr[i][j] == Max) {
                AmountOfRows++;
                break;
            }          
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matr[i][j] == Min) {
                matr[i][j] = AmountOfRows;
            }
            printf("%d ", matr[i][j]);        
        }
        printf("\n");
    }
    return 0;
}
```


### Вариант №33
```c
#include <stdio.h>
#define MAX_SIZE 8

int* getElementPointer(int *arr, int i, int j, int size) {
    return &(arr[i * size + j]);
}

void readMatrix(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            scanf("%d", getElementPointer(arr, i, j, size));
        }
    }
}

void generation_matrix(int *matrix, int size, int *result) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            // Проверяем кососимметричность и записываем разницу
            if (*(matrix + i * size + j) == -( *(matrix + j * size + i) )) {
                *(result + i * size + j) = 0; // Кососимметричный элемент - ставим 0
            } else {
                *(result + i * size + j) = *(matrix + i * size + j) - -( *(matrix + j * size + i)); // Разница
            }
        }
    }
}

void print_matrix(int *matrix, int size) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            printf("%d ", *(matrix + i * size + j));
        }
        printf("\n");
    }
}

int main() {
    int arr[MAX_SIZE * MAX_SIZE];
    int n;
    scanf("%d", &n);
    readMatrix(arr, n);
    int discrepancy_matrix[MAX_SIZE * MAX_SIZE];
    generation_matrix(arr, n, discrepancy_matrix);
    printf("Матрица расхождений:\n");
    print_matrix(discrepancy_matrix, n);
    return 0;
}
```


### Вариант №34
```c
 #include <stdio.h>
#include <stdbool.h>
#define MAX_SIZE 8



int* getElementPointer(int *arr, int i, int j) {
    return &(arr[i * MAX_SIZE + j]);
}

void readMatrix(int *arr, int *n) {
    scanf("%d", n);
    for (int i = 0; i < *n; i++) {
        for (int j = 0; j < *n; j++) {
            scanf("%d", getElementPointer(arr, i, j));
        }
    }
}

void printMatrix(int *arr, int n) {
    int  firstColumn = 0, lastColumn = (n - 1), firstLine = 0, lastLine = (n - 1);

    while ((lastLine >= firstLine) && (lastColumn >= firstColumn)) {
        for (int i = lastLine; i >= firstLine; i--) {
            printf("%d ", *getElementPointer(arr, i, firstColumn));
        }
        firstColumn++;
        printf("\n");
    }
    printf("\n");
}

int main() {
    int arr[MAX_SIZE * MAX_SIZE];
    int n;
    readMatrix(arr, &n);
    printf("\n");
    printMatrix(arr, n);
    return 0;
}
```


### Вариант №35
```c
#include <stdio.h>
#define MAX_SIZE 8

int* getElementPointer(int *arr, int i, int j) {
    return &(arr[i * MAX_SIZE + j]);
}

void readMatrix(int *arr, int *n) {
    scanf("%d", n);
    for (int i = 0; i < *n; i++) {
        for (int j = 0; j < *n; j++) {
            scanf("%d", getElementPointer(arr, i, j));
        }
    }
}

void printMatrix(int *arr, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            printf("%d ", *getElementPointer(arr, i, j));
        }
        printf("\n");
    }
}

void rotateMatrix(int *arr, int n, int *res) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            *getElementPointer(res, i, j) = *getElementPointer(arr, j, i);
        }
    }
}

void reflectRows(int *arr, int n, int *res) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            *getElementPointer(res, n - i - 1, j) = *getElementPointer(arr, i, j);
        }
    }
}

int main() {
    int arr[MAX_SIZE * MAX_SIZE];
    int res1[MAX_SIZE * MAX_SIZE];
    int res2[MAX_SIZE * MAX_SIZE];
    int n;
    readMatrix(arr, &n); // чтение матрицы
    printf("\n");

    rotateMatrix(arr, n, res1); // транспонирование матрицы
    reflectRows(res1, n, res2); // отражение строк отн-но центра
    printMatrix(res2, n);
}
```



## Разное | Си
### Неопознанное №1
От автора
> Проверка на палидром строк и чисел

Код
```c
#include <stdio.h>

char toLowerCase(char c) {
    if (c >= 'A' && c <= 'Z') {
        return c + ('a' - 'A'); // Преобразуем символ в нижний регистр
    }
    return c;
}

int isAlphaOrNumber(char c) {
    return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}

int isPalindromeString(char str[]) {
    int left = 0;
    int right = 0;

    // Вычисляем длину строки
    while (str[right] != '\0') {
        right++;
    }
    right--; // Устанавливаем указатель на последний символ

    while (left < right) {
        // Пропускаем неподходящие символы
        while (left < right && !isAlphaOrNumber(str[left])) {
            left++;
        }
        while (left < right && !isAlphaOrNumber(str[right])) {
            right--;
        }

        // Сравниваем символы без учёта регистра
        if (toLowerCase(str[left]) != toLowerCase(str[right])) {
            return 0; // Это не палиндром
        }
        left++;
        right--;
    }
    return 1; // Это палиндром
}

#include <stdio.h>

int main() {
    char str[100];

    printf("Введите строку: ");
    scanf("%[^\n]", str); // Считываем всю строку до символа новой строки
    if (isPalindromeString(str)) {
        printf("Это палиндром.\n");
    } else {
        printf("Это не палиндром.\n");
    }

    return 0;
}
```


### Неопознанное №2
От автора 
> Проверка числа на палидром

Код
```c
#include <stdio.h>

int isPalindromeNumber(int num){
    int org = num;
    int reversed = 0;
    while (num > 0){
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }
    return org == reversed;
}

int main(){
    int num;
    printf("Введите число: ");
    scanf("%d",&num);
    if (isPalindromeNumber(num)){
        printf("Число %d является палиндромом.", num);
    }else{
        printf("Число %d не является палиндромом.\n", num);
    }
    return 0;
}
```
