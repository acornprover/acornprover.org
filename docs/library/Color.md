# Color

```acorn
inductive Color {
    red
    green
    blue
}
```

A simple enumeration type used as an example of a metric space with the discrete metric.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/metric_space.ac)

---
## blue

```acorn
Color.blue: Color
```

Blue is not red or green.
## green

```acorn
Color.green: Color
```

Green is not red or blue.
## red

```acorn
Color.red: Color
```

Red means nothing. It's just different from green and blue.
