# 集合 & 数学符号与命题逻辑

## 集合

>[CS70 Note 0 | UC Berkeley](https://www.eecs70.org/assets/pdf/notes/n0.pdf)

**集合（*set*）**是明确定义的对象组合，这些对象称为集合的**元素**或**成员**，可以是任何事物。

### 基数

==**基数（*cardinality*）**是指集合中不同元素的数量==。假设有一个集合 $A = {\{1, 2, 3, 4, 5\}}$，其基数就是它的元素数量$5$，记作：

$$
|A| = 5
$$

一个集合的元素个数可能是$0$，此时这个集合就是一个空集，用符号 $\varnothing$ 或 $\{\}$ 表示。

### 子集与真子集

设集合 $A$ 中的所有元素都属于集合 $B$，则称 ==$A$ 是 $B$ 的**子集（*subset*）**==，记作:

$$
A \subseteq B
$$

或称 ==$B$ 是 $A$ 的**超集（*superset*）**==，记作:

$$
B \supseteq A
$$

特别地，若集合 $B$ 中还包含 $A$ 中不存在的元素，则称 ==$A$ 是 $B$ 的**真子集（*proper subset*）**==，记作 ==$A \subset B$==。

以下是关于集合的几个基本性质:

  - 空集是任何非空子集 $A$ 的**真子集**：$\forall A \subseteq \mathbb{U}$, $\varnothing \subset A$ ($A \not ={\varnothing}$)

  - 空集是任意集合 $B$ 的**子集**：$\forall B \subseteq \mathbb{U}$, $\{\} \subseteq B$

  - 任意集合 $A$ 都是其自身的子集：$\forall A \subseteq \mathbb{U}$, $A \subseteq A$

### 交集与并集

集合 $A$ 与集合 $B$ 的**交集（*intersection*）**，指包含同时属于二者的元素的集合，记作：

$$
A \cap B
$$

若两个集合存在关系 $A \cap B = \varnothing$，则称二者**互斥（*disjoint*）**。

集合 $A$ 与集合 $B$ 的**并集（*union*）**，指包含所有属于二者的元素的集合，记作：

$$
A \cup B
$$

例如，设 $A$ 是所有正偶数的集合，$B$ 是所有正奇数的集合，则 $A$ 与 $B$ 的交集就是空集，并集则是正整数集。

即 

$$
(\exists A = \{x \in \mathbb{N}^{+}\ |\ \exists k \in \mathbb{N}^{+}, x = 2k\},\ B = \{x \in \mathbb{N}^{+}\ |\ \exists k \in \mathbb{N}^{+}, x = 2k - 1\})(A \cap B = \varnothing \land A \cup B = \mathbb{N}^{+})
$$

下面是关于交集与并集的几个性质：

- $A \cap B = B \cap A$

- $A \cup B = B \cup A$

- $A \cap \varnothing = \varnothing$

- $A \cup \varnothing = A$

### 差集

集合 $A$ 中集合 $B$ 的**相对补集（*relative complement*）**，或称为 $A$ 与 $B$ 的**差集（*set difference*）**，记作：

$$
B - A
$$

或

$$
B \setminus A
$$

指 ==属于 $B$ 但不属于 $A$ 的元素组成的集合==，即：

$$
B \setminus A = \{x\ |\ x\in B,\ x\not \in A\}
$$

例如，实数集与有理数集的差集就是无理数集：$\mathbb{R} \setminus \mathbb{Q}$

!!! warning inline end
    ️注意差集运算不满足交换律：

    $$
    B \setminus A \not = A \setminus B
    $$

以下是关于差集的几个重要性质：

- $A \setminus A = \varnothing$

- $A \setminus \varnothing = A$

- $\varnothing \setminus A = \varnothing$

### 笛卡尔积与幂集

#### 笛卡尔积

两个集合 $A$ 和 $B$ 的**笛卡尔积（*Cartesian product*）**，也被称为**叉积（*cross product*）**，记作：

$$
A \times B
$$

==是由所有由 $A$ 与$B$ 中的元素组成的**有序对**的集合==，其中第一个分量为 $A$ 的元素，第二个分量为 $B$ 的元素，即：

$$
A \times B = \{(a, b)\ |\ a \in A,\ b \in B\}
$$

例如，设 $A = \{1, 3, 5\}$ ，$B = \{u, v\}$，则：

$$
A \times B = \{(1, u), (1, v), (3, u), (3, v), (5, u), (5, v)\}
$$

对于两个自然数集的叉积，则有：

$$
\mathbb{N} \times \mathbb{N} = \{(0, 0), (1, 0), (0, 1), (1, 1), (2, 0), ...\}
$$

表示所有自然数对构成的集合。

#### 幂集

给定集合 $S$，其**幂集（*power set*）**记作

$$
\wp(S)
$$

==指 $S$ 的所有子集构成的集合==，即：

$$
\wp(S) = \{T\ |\ T \subseteq S\}
$$

例如，设集合 $A = \{1, 2, 3\}$，则

$$
\wp(A) = \{\varnothing, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}
$$

!!! tip "幂集基数定理"
    对于任意**有限集合** $S$，若 $|S| = k$，则 $|\wp(S)| = 2^k$，即：

    $$
    (\forall S \subseteq \mathbb{U})(\exists k \in \mathbb{N})(|S| = k \rightarrow |\wp(S)| = 2^k)
    $$

## 数学符号与数学陈述

>[CS70 Note 1 | UC Berkeley](https://www.eecs70.org/assets/pdf/notes/n1.pdf)

为了能够流畅、熟练地处理数学陈述，我们有必要理解数学语言的基础框架以及一些常用的数学符号。

### 求和与求积

对于书写大量项的和或积，有一种紧凑的表达方式，即**求和（$\sum$）**与**求积（$\prod$）**符号。

对于多项式 $\mathcal{f}(m) + \mathcal{f}(m+1) + ... + \mathcal{f}(n)$，我们可以写作：

$$
\sum_{i=m}^n \mathcal{f}(i)
$$

同理，对于$\mathcal{f}(m) \cdot \mathcal{f}(m+1) ... \mathcal{f}(n)$，可简写作：

$$
\prod_{i=m}^n \mathcal{f}(i)
$$

### 命题逻辑

**命题（*proposition*）**是陈述数学定理的一个基础构件，定义上，它是一个 ==非真即假的陈述句==。

例如，以下陈述皆为命题：

  - $5$ 是有理数

  - $x^2 + 2x +1 > 1$

  - *virtualguard101* 是一个飞舞

而下列陈述则不能被定义为命题：

  - $\sqrt{5} + \sqrt{5}$ [无法定义真假]

  - $x^2 + 2x +1 = 1$ [$x$ 是多少?]

  - 他是大佬  [他是谁?]

==命题不应包含**概念模糊**的术语。==

#### 逻辑连接词与命题形式

==命题可以通过逻辑连接词组合成更复杂的陈述。== 可参考[维基百科](https://zh.wikipedia.org/wiki/%E9%80%BB%E8%BE%91%E7%AC%A6%E5%8F%B7%E8%A1%A8)了解关于逻辑符号的详细信息。

设存在命题变量 $P$、$Q$（如可令$P =$ "$5$是有理数"），则连接这些命题最简单的方式就是使用“与”、“或”、“非”等逻辑连接词。

- **合取（*conjunction*）**: $P ∧ Q$（$P$ 且/与 $Q$，当且仅当 $P$ 与 $Q$ 同时为真时为真）

- **析取（*disjunction*）**: $P ∨ Q$（$P$ 或 $Q$，当 $P$ 和 $Q$ 中至少有一个为真时为真）

- **否定（*negation*）**: $\neg P$（非 $P$，当 $P$ 为假时为真）

!!! note inline end "排中律"
    对于任意命题 $P$，==要么其为真，要么其否定 $\neg P$ 为真，但二者不会同时为真==：

    $$
    \phi(x) ∨ \neg \phi(x)
    $$

==这类带有变量的陈述被称为**命题形式（*propostiotn forms*）**==

根据**排中律（*law of the excluded middle*）**可得，无论命题 $P$ 的真值如何，$P \vee \neg P$ 恒为真。像这样 ==真值恒为真的命题形式，我们称其为**重言式（*tautology*）**==；反之，像 $P \wedge \neg P$ 这样 ==恒为假的命题形式，则被称为**矛盾式（*contradiction*）**==

在分析命题形式可能取值的过程中，**真值表（*truth table*）**是一个直观高效的工具，其与函数表相同：列出所有可能的输入变量，并给出对应的输出值。

例如否定的真值表：

| $P$ | $\neg P$ |
|:-:|:-:|
|$T$|$F$|
|$F$|$T$|

- **蕴含（*implication*）**: $P \Rightarrow Q$（$P$ 蕴含 $Q$，如果 $P$，那么 $Q$）

    蕴含是最重要且微妙的命题形式。在定义中，$P$ 是蕴含的**前提（*hypothesis*）**，$Q$ 则是**结论（*conclusion*）**[^1]

    关于蕴含的实例俯拾皆是，例如：

      - **如果** $\Delta \geqslant 0$，**那么**一元二次方程 $ax^2 + bx + c = 0$ 有实根

      - **如果**你能解出这个难题，**那么**你就是一个天才

    ==只有当前提 $P$ 为真而结论 $Q$ 为假时，蕴含关系 $P \Rightarrow Q$ 才为假==

    以下是蕴含关系的真值表：

    | $P$ | $Q$ | $P \Rightarrow Q$ | $\neg P \wedge Q$ |
    |:---:|:---:|:-----------------:|:-----------------:|
    |$T$|$T$|$T$|$T$|
    |$T$|$F$|$F$|$F$|
    |$F$|$T$|$T$|$T$|
    |$F$|$F$|$T$|$T$|

    !!! note
        - ==当前提 $P$ 为假时，$P \Rightarrow Q$ 总为真==。这意味着，许多在自然语言中看似荒谬的陈述，从数学角度而言却是成立的，例如：“如果猪会飞，那么熊就会说话”、“如果 $\sqrt{5}$ 是有理数，那么 $\sqrt{-5}$ 也是有理数”等。==当一个蕴含关系因其前提为假而成立时，我们称其为“空洞真（*vacuously true*）”==

        - 从上面的表格可以看出，==$P \Rightarrow Q$ 在逻辑上等价于 $\neg P \wedge Q$== ——对于 $P$ 和 $Q$ 所有的真值组合，二者都取到了相同的值。在数学语言中，我们将其表示为：==$(P \Rightarrow Q) \equiv (\neg P \wedge Q)$==

        - 当两个命题形式在逻辑上等价时，我们可以认为它们“表达的是同一个东西”

    $P \Rightarrow Q$ 是数学定理最常见的表达形式。下面是表述这个关系的不同方式：

    1. 若 $P$ 成立，则 $Q$ 成立
    2. $Q$ 成立，若 $P$ 成立
    3. 仅当 $Q$ 成立时，$P$ 才成立
    4. ==$P$ 是 $Q$ 的充分条件==
    5. ==$Q$ 是 $P$ 的必要条件==

    特别的，当 $P \Rightarrow Q$ 与 $Q \Rightarrow P$ 同时为真时，则称 ==$P$ 当且仅当 $Q$（可缩写为"$P$ *iff* $Q$"）==，形式上记作 ==$P \Leftrightarrow Q$==。此时，若 $P \Leftrightarrow Q$ 为真， 则 $P$ 与 $Q$ 需要具有**相同的真值**，即**同真或同假**。

    !!! example

        设 $P =$ "$3$ 是奇数", $Q =$ "$4$ 是奇数", $R =$ "$6$ 是偶数";

        显然，在这里 $P$、$R$ 为真，$Q$ 为假，则可推出 $P \Rightarrow R$、$Q \Rightarrow P$、$R \Rightarrow P$ 均为真，其中 $Q \Rightarrow P$ 为空洞真;

        又 $P \Rightarrow R$、$R \Rightarrow P$ 同为真，故可得 $P \Leftrightarrow R$ 为真。

    给定一个蕴涵式 $P \Rightarrow Q$，还可定义其
    
    1. 逆否命题: $\neg Q \Rightarrow \neg P$
    2. 逆命题: $Q \Rightarrow P$

        在上面的例子中，关于蕴涵式 $P \Rightarrow R$ 逆否命题的自然语言描述就是*如果 $6$ 不是偶数，那么 $3$ 就不是奇数*；逆命题则是*如果 $6$ 是偶数，那么 $3$ 就是奇数*。
    
    还是关于 $P \Rightarrow Q$ 等蕴含关系，可总结出以下真值表：

    | $P$ | $Q$ | $\neg P$ | $\neg Q$ | $P \Rightarrow Q$ | $Q \Rightarrow P$ | $\neg Q \Rightarrow \neg P$ | $P \Leftrightarrow Q$ |
    |:---:|:---:|:--------:|:--------:|:-----------------:|:-----------------:|:---------------------------:|:---------------------:|
    |$T$|$T$|$F$|$F$|$T$|$T$|$T$|$T$|
    |$T$|$F$|$F$|$T$|$F$|$T$|$F$|$F$|
    |$F$|$T$|$T$|$F$|$T$|$F$|$T$|$F$|
    |$F$|$F$|$T$|$T$|$T$|$T$|$T$|$T$|

    !!! note
        在逻辑上，==一个蕴含关系的逆否命题等价于它本身==: ==$(P \Rightarrow Q) \equiv (\neg Q \Rightarrow \neg P)$==; 但逆命题并不等价！


### 量词与谓词

#### 量词

$\forall$ 是**全称量词（*universal quantifier*）**，表示“对于所有”；$\exists$ 是**存在量词（*existential quantifier*）**，表示“存在...（条件）”

==使用量词的命题陈述本质上同时断言了若干简单命题==
!!! example

    - 以命题 "对于任意自然数 $n$，$n^2 总大于等于 0$", 即"$(\forall n \in N)(n^2 \geqslant 0)$" 为例，这个陈述就同时断言了，**对于所有自然数 $n$**，条件命题 $n \in N \Rightarrow n^2 \geqslant 0$ 都是成立的（即 $0^2 \geqslant 0$ 成立、$1^2 \geqslant 0$ 成立.....）

    - 以命题 "存在一个整数 $n$ 既是奇数又是偶数", 即"($\exists n \in \mathbb{Z}$)($\exists k_1, k_2 \in \mathbb{Z}$)($n = 2k_1 \land n = 2k_2 + 1$)" 为例，该陈述则表明，当 $n$ 遍历所有可能的整数时，我们**至少能够找到一个满足条件**的 $k$ 值

#### 谓词（命题公式）

我们将含有变量的陈述称为**谓词（*predicate*）**或**命题公式（*propositional formula*）**，==当使用一个具体的值去替换变量时，该陈述会具有**明确的真值**==。例如，陈述 $(\forall n \in N)(n^2 \geqslant 0)$ 就是一个关于变量 $n$ 的谓词或命题公式，该陈述在在自然数 $n$ 上的真值就取决于 $n$ 的具体取值——即用具体数值替换变量后，==谓词就转化为命题==，因此，我们也可以将谓词看作是 ==命题的扩展==。

!!! tip

    在**有限全域（*finite universe*）**中，我们可以不使用量词而分别通过析取和合取来表达存在量化与全称量化的命题。例如，令全集 $\mathbb{U} = \{1, 3, 5\}$，则谓词 $(\exists x \in \mathbb{U})P(x)$ 在逻辑上等价于 $P(1) \lor P(3) \lor P(5)$；而谓词 $(\forall x \in \mathbb{U})P(x)$ 在逻辑上就等价于 $P(1) \land P(3) \land P(5)$。

    ⚠️上述定理对于**无限全域（*infinite universe*）**不适用。

#### 量词的作用域

在谓词或命题公式中，常使用括号 $()$、$[]$、${}$ 来限定量词的作用域。简单的命题公式通常遵循以下结构：

$$
(\text{quantifier}\ \text{variable}\ \text{domain})(\text{proposition})
$$

例如，有以下命题公式

$$
(\forall x \in \mathbb{R})(x^2 \geqslant 0)
$$

该命题用自然语言表述即：对于任意实数 $x$，$x^2 \geqslant 0$ 均成立。

- 第一个括号用于定义量词的 ==作用域==，即变量 $x$ 及其定义域

- 第二个括号用于写入量词所 ==约束的命题==，即 $x^2 \geqslant 0$ 这个命题

在遇到复杂陈述时，如包含多重量词的陈述，括号也可连续使用。多个括号在连续使用时，只有最后一个括号用于写入命题，前面所有括号均表示约束该命题的作用域

!!! warning
    注意使用多重量词时，量词顺序是不可随意调换的，可通过以下两个例子分析：

    1. $(\forall x \in \mathbb{Z})(\exists y \in \mathbb{Z})(x < y)$
    2. $(\exists y \in \mathbb{Z})(\forall x \in \mathbb{Z})(x < y)$

    第一条陈述指出，*给定一个整数，总能找到比它还大的整数*。这是一个真命题；而第二条陈述则截然不同：它则表明*存在一个大于任何整数的整数，即存在一个最大的整数*。这显然是一个假命题。

#### 复杂谓词示例

1. 将自然语言陈述“存在至少三个不同整数 $x$ 满足 $P(x)$”使用量词表示为命题。

    其中一种表示方式是

    $$
    (\exists x \in \mathbb{Z})(\exists y \in \mathbb{Z})(\exists z \in \mathbb{Z})(x \not ={y} \land x \not ={z} \land y \not ={z} \land P(x) \land P(y) \land P(z))
    $$

2. 将自然语言陈述“最多有三个不同整数 $x$ 满足 $P(x)$ ”使用量词表示为命题。

    其中一种表示方式是

    $$
    \exists x \exists y \exists z \forall d(P(d) \Rightarrow d = x \lor d = y \lor d = z)
    $$

    对于这个命题，可以理解为“存在三个特定的整数 $x$、$y$、$z$，使得如果 $P(d)$ 为真，那么 $d$ 就必须是这三个整数之一”。

    还有许多其他陈述可以描述这个命题，例如：

    $$
    \forall x \forall y \forall z \forall u (x \not ={y} \land x \not ={z} \land x \not ={u} \land y \not ={z} \land y \not ={u} \land z \not ={u}) \Rightarrow \neg (P(x) \land P(y) \land P(z) \land P(u))
    $$
    
    这个陈述就相对好理解些，其表明“不可能同时存在四个不同的整数使得对应的 $P(x)$ 成立”，也就阐明了“**最多**有三个不同整数满足 $P(x)$ 这一陈述”。

3. 将自然语言陈述“恰好存在三个不同整数 $x$ 使得 $P(x)$ 成立”使用量词表示为命题。

    将`1.`、`2.`**合取**即可。

!!! note

    对于一个相同的数学陈述，我们或许可以找到无数个等价的命题表述，例如采用之前提到的**逆否命题**、使用下面提到的**否定传播**等。通常来说，我们应该选择能够最为清晰表达出原意的命题逻辑陈述

### 否定运算

掌握否定运算的规则对于学习证明很有帮助。

对于命题 $P$ 与 命题 $Q$ 的否定析取与合取，有以下性质：

$$
\neg (P \land Q) \equiv (\neg P \lor \neg Q)
$$

$$
\neg (P \lor Q) \equiv (\neg P \land \neg Q)
$$

这两条等价关系被称为[**德摩根定律（*De Morgan's Laws*）**](https://brilliant.org/wiki/de-morgans-laws/)。根据这个定律，可以很直观的推出：如果 $P \land Q$ 为真不成立，那么 $P$ 或 $Q$ 至少有一个为假，反之亦然。

涉及量词的命题否定也遵循类似的法则：

$$
\neg (\forall x P(x)) \equiv \exists x \neg P(x)
$$

$$
\neg (\exists x P(x)) \equiv \forall x \neg P(x)
$$

这两条等价关系就可以看作是德摩根定律在**任意论域上**的推广，这也照应了前文所说的*可以将谓词看作是命题的扩展*。

!!! tip

    可通过构造一些自然语言来简单验证这些逻辑定理的正确性：

    设论域为 $\mathbb{Z}$，$P(x) =$ "$x$ 是奇数"。

    显然，$(\forall x P(x))$ 为假，因为不可能所有整数都是奇数，所以其否定 $\neg (\forall x P(x))$ 就为真，那么就可以使用这样的自然语言来描述这个否定：既然“所有整数都是奇数”不成立，那么就必然“存在某个整数是偶数”，也就对应了谓词 $(\exists x \neg P(x))$。

下面来看一个更加复杂的例子：

固定某个论域和命题公式 $P(x, y)$。假设有这样一个命题：$\neg (\forall x \exists y P(x, y))$，我们想要将命题前的否定运算符移入量词内部。根据上述定律，我们就可以像这样逐步转换：

$$
\neg (\forall x \exists y P(x, y)) \equiv \exists x \neg (\exists y P(x, y)) \equiv \exists x \forall y \neg P(x, y)
$$

随着否定符在量词间的传递，==原本复杂的否定问题也就分解成了更小、更易处理的子问题==；同时，量词会随着否定符的深入而发生**翻转**。


[^1]: $P$ 有时也被称为**前件（*antecedent*）**，而 $Q$ 则被称为**后件（*consequent*）**