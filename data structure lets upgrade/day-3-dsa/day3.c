#include <stdio.h>
#include <stdlib.h>
int main() {
    int i,j,rows;
    char ch;
    printf("Enter the number of rows\n");
scanf("%d%c",&rows,&ch);
printf("Enter the Symbol for pattern\n");
ch=getchar();
printf("\n");

for(i=1; i<=rows; i++){
   for(j=1; j<=i; j++){
   printf(" ");
   }
   for(j=1; j<=rows; j++){
   printf("%c",ch);
}
 printf("\n");
}
   
    return 0;
}