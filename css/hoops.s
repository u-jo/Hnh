.text 

main: 
li $v0, 5
syscall 

move $a0, $v0

#set up counter 
move $t0, $v0
move $t1, $0
mul $a0, $a0, 260 # allocates memory for number of basketball structs - 256 for basketball players (max length is 256 chars) and 32 for points per minute 

li $v0, 9
syscall 

# $s0 holds the address 
move $s0, $v0
# while $s1 will be modified 
move $s1, $v0 


get_input_loop:
slt $t2, $t1, $t0
beqz $t2, intermediate

# set address of struct
la $a0, ($s1)

# set maximum length of string to 256 characters
li $t3, 256
move $a1, $t3

#read string
li $v0, 8
syscall

# get rid of new line
li $t6, 0
remove: 
lb $a2, ($a0)
addi $t6, $t6, 1
addi $a0, $a0, 1
bnez $a2, remove
beq $t6, $a1, skip
subiu $a0, $a0, 2
sb $0, ($a0)

skip:
# read points per game
li $v0, 6
syscall
mov.s $f2, $f0

# read time in game
li $v0, 6
syscall
mov.s $f4, $f0

# calculates points per minute
div.s $f0, $f2, $f4
s.s $f0, 256($s1)

addi $s1, $s1, 260
addi $t1, $t1, 1
b get_input_loop
#########################
intermediate: 
# recreate counter i
li $t1, 0
#########################
print_loop:
slt $t2, $t1, $t0
beqz $t2, finish_input
# get address of string and print it
move $s1, $s0
move $s3, $s0
# set minimum to be -1
# recreate counter j
li $t3, 0
move $t4, $t0
l.s $f2, arbitrary
#########################
inner_loop:
slt $t5, $t3, $t4
beqz $t5, print_and_modify

# load float 
l.s $f0, 256($s1)

# compare stored float 
c.le.s $f0, $f2
bc1t set_min
bc1f cont

cont:
addi $s1, $s1,260
addi $t3, $t3, 1
b inner_loop

set_min:
mov.s $f2, $f0
move $s3, $s1
addi $s1, $s1,260
addi $t3, $t3, 1
b inner_loop
#########################
print_and_modify:
#print info
la $a0, ($s3)
li $v0, 4
syscall 

# print space
la $a0, space
li $v0, 4
syscall

# print float
l.s $f12, 256($s3)

li $v0, 2
syscall

# print new line
la $a0, nln
li $v0, 4
syscall

l.s $f10, arbitrary
s.s $f10, 256($s3)
addi $t1, $t1, 1
b print_loop
#########################

finish_input:
li $v0, 10
syscall

 .data
 arbitrary: .float 100000.0
 space: .ascii " "
 nln: .asciiz "\n"