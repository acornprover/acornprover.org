# MetricSpace

```acorn
typeclass M: MetricSpace {
    distance: (M, M) -> Real
    self_distance_is_zero(x: M) {
        x.distance(x) = 0
    }
    dist_zero_imp_eq(x: M, y: M) {
        x.distance(y) = 0 implies x = y
    }
    symmetric(x: M, y: M) {
        x.distance(y) = y.distance(x)
    }
    triangle(x: M, y: M, z: M) {
        x.distance(z) <= x.distance(y) + y.distance(z)
    }
}
```

A metric space is a set equipped with a distance function that satisfies specific axioms.
The distance function must be non-negative, symmetric, and satisfy the triangle inequality.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/metric_space.ac)

---
## dist_zero_imp_eq

```acorn
dist_zero_imp_eq(x: M, y: M) {
    x.distance(y) = 0 implies x = y
}
```

Rule: distance zero means the points are equal
## distance

```acorn
distance: (M, M) -> Real
```

Every metric space must have a distance function
## self_distance_is_zero

```acorn
self_distance_is_zero(x: M) {
    x.distance(x) = 0
}
```

Rule: the distance from a point to itself is zero
## symmetric

```acorn
symmetric(x: M, y: M) {
    x.distance(y) = y.distance(x)
}
```

Rule: distance must be symmetric
## triangle

```acorn
triangle(x: M, y: M, z: M) {
    x.distance(z) <= x.distance(y) + y.distance(z)
}
```

Rule: distance must satisfy the triangle inequality
