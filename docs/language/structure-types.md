---
sidebar_position: 7
---

# Structure Types

Structure types group together objects of other types. They are defined with the `structure` keyword. For example, we can make a type out of two integer fields:

```acorn
from int import Int
numerals Int

structure LatticePoint {
    x: Int
    y: Int
}
```

Field names must be lowercase. Structure types can't refer to themselves in their definition.

## Structure Methods

When we define a structure type, it comes with a `new` method to create objects of this type. Methods are functions that are affiliated with a particular type. They can be used with a dot syntax, `TypeName.method_name`:

```acorn
let origin: LatticePoint = LatticePoint.new(0, 0)
```

Each field also comes with a "projection" method, to get that field's value out of the structure.

```acorn
theorem origin_x_is_zero {
    LatticePoint.x(origin) = 0
}
```

For methods where the first argument is the type itself, you can use the dot syntax with the object itself. So `LatticePoint.x(point)` and `point.x` are equivalent.

```acorn
theorem origin_y_is_zero {
    origin.y = 0
}
```

## Implicit Meaning

Structure types have two implicit theorems. One is that the `new` constructor can make every object of that type.

```acorn
theorem new_is_surjective(p: LatticePoint) {
    exists(x: Int, y: Int) {
        p = LatticePoint.new(x, y)
    }
}
```

The other implicit theorem is that the projection methods retrieve the arguments used to construct the structure.

```acorn
theorem projection(x: Int, y: Int) {
    LatticePoint.new(x, y).x = x and LatticePoint.new(x, y).y = y
}
```
