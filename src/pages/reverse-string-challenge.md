---
title: "Why do so Many People Fail The Reverse String Challenge?"
date: "2019-02-26"
author: Chase Hardin
cover: https://i.kym-cdn.com/entries/icons/mobile/000/000/028/Fail-Stamp-Transparent_copy.jpg
---

Okay, this is our test.
```csharp
using Xunit;

namespace ReverseStringKata.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Reverse__GivenString__ReturnsReverseOfString()
        {
            const string expected = "Fighters Foo";
            const string provided = "Foo Fighters";
            
            var actual = new ReverseString().Reverse(provided);
            
            Assert.Equal(actual, expected);
        }
    }
}
```

To follow true TDD, we need to do the minimilisc thing to make it pass:

```csharp
namespace ReverseStringKata
{
    public class ReverseString
    {
        public string Reverse(string value)
        {
            return "Fighters Foo";
        }
    }
}
```

Test was updated
```csharp
using System;
using Xunit;

namespace ReverseStringKata.Tests
{
    public class ReverseStringTests
    {
        [Fact]
        public void Reverse__GivenString__ReturnsReverseOfString()
        {
            var reverseString = new ReverseString();
            const string fooFightersReversed = "Fighters Foo";
            const string jimiHendrixReversed = "Hendrix Jimi";
            
            Assert.Equal(reverseString.Reverse("Foo Fighters"), fooFightersReversed);
            Assert.Equal(reverseString.Reverse("Jimi Hendrix"), jimiHendrixReversed);
        }
    }
}
```
