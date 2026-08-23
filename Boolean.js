/*Concepts*/

/**
 * JavaScript implicitly converts the values to boolean in the boolean context.
 * 
 * i.e 
 * const name = "abc";
 * if(name)
*/

 const name = "asad";
 if(name){
    console.log('Name is: ' , name);
 }

 //How this work internally
 /* the name is converted to Boolean automatically roughly like this: Boolean(name) and then it will be checked. */
 //You can also convert a value to Boolean using double ! (!!)
console.log(Boolean(0))
console.log(!!0);
//Both are the same.


/* IMP */
//[] is truthy but is loosly equals to false
if([]) console.log("[] is truthy that's why it is running...")

console.log([] == false) //true : Because it is losely equal to false
/*
How "[] == false" works internaly
First it is converted to its primitive value using `toString` method which return empty string ''
Then the empty string is convert to Boolean using Boolean as a Function

See Below steps
*/

console.log([].toString());

console.log(Boolean([].toString()));
//Simply anything that is coerced to 0 will truthy but also loosely equals to false 


/* EXERCISE */

/**
 * Boolean Brainstorming Task — Transaction Risk Evaluator

Build a JavaScript function that evaluates whether a financial transaction is safe to process.

Given Data

Each transaction has the following properties:

const transaction = {
    amount: 5000,
    isVerifiedUser: true,
    hasSufficientBalance: true,
    isAccountActive: true,
    isBlockedCountry: false,
    isSuspicious: false,
    hasTwoFactorAuth: true
};
Your Task

Create a function:

function evaluateTransaction(transaction) {
    // your solution
}

The function should return an object containing the following properties:

{
    canProcess: true,
    requiresManualReview: false,
    canAutoApprove: true,
    isHighRisk: false,
    needsAdditionalAuthentication: false,
    finalDecision: "APPROVED"
}
Questions

1. canProcess

Under what conditions should a transaction be allowed to proceed?

A transaction can be processed only when:

The user is verified.
The account is active.
The user has sufficient balance.
The country is not blocked.
The transaction is not suspicious.

2. requiresManualReview

When should a transaction require manual review?

A transaction requires manual review when:

It is suspicious OR
Its amount is greater than 100000.

However, an inactive account should not be sent for manual review.

3. canAutoApprove

When can a transaction be automatically approved?

A transaction can be automatically approved when:

It can be processed.
The user has two-factor authentication enabled.
It does not require manual review.

4. isHighRisk

When should a transaction be considered high-risk?

A transaction is high-risk when at least two of the following conditions are true:

The amount is greater than 50000.
The transaction is suspicious.
The country is blocked.
The user is not verified.

5. needsAdditionalAuthentication

When should additional authentication be required?

Additional authentication is required when:

The amount is greater than 10000 AND the user does not have 2FA,

OR

The transaction is suspicious AND the user is verified.

6. finalDecision

What should the final decision be?

If the transaction cannot be processed → "REJECTED"
If the transaction requires manual review → "MANUAL_REVIEW"
Otherwise → "APPROVED"
Requirements
Use Boolean expressions wherever the expected result is true or false.
Avoid unnecessary if/else statements for Boolean properties.
Do not use ? true : false when the condition itself already produces the required Boolean.
Create at least 8 test transactions that cover different combinations of conditions.
Pay particular attention to operator precedence between && and ||.
For isHighRisk, think about how you can determine whether at least two Boolean conditions are true.
Bonus Challenge

Can you implement all five Boolean properties without using a single if/else or ternary operator?

Then use conditional logic only where it makes sense for finalDecision.
 */

function evaluateTransaction(transaction) {
    let canProcess = transaction.isVerifiedUser &&
    transaction.isAccountActive && transaction.hasSufficientBalance && !transaction.isBlockedCountry && !transaction.isSuspicious

    let requiresManualReview =  (transaction.isSuspicious || transaction.amount > 100000) && transaction.isAccountActive ;

    let canAutoApprove = canProcess && transaction.hasTwoFactorAuth && !requiresManualReview;

    let isHighRisk = (transaction.amount > 50000 && transaction.isSuspicious) ||
    (transaction.amount > 50000 && transaction.isBlockedCountry) ||
    (transaction.amount > 50000 && !transaction.isVerifiedUser) ||
    (transaction.isSuspicious && transaction.isBlockedCountry) ||
    (transaction.isSuspicious && !transaction.isVerifiedUser) ||
    (transaction.isBlockedCountry && !transaction.isVerifiedUser);


    let needsAdditionalAuthentication = (transaction.amount > 10000 && !transaction.hasTwoFactorAuth) ||
    (transaction.isSuspicious && transaction.isVerifiedUser);

    let finalDecision = !canProcess ? 'REJECTED' : (requiresManualReview ? 'MANUAL_REVIEW' : 'APPROVED');

    return {
        canProcess,
        requiresManualReview,
        canAutoApprove,
        isHighRisk,
        needsAdditionalAuthentication,
        finalDecision
    };
}

const transaction = {
    amount: 5000,
    isVerifiedUser: true,
    hasSufficientBalance: true,
    isAccountActive: true,
    isBlockedCountry: false,
    isSuspicious: false,
    hasTwoFactorAuth: true
};
console.log(transaction)
console.log(evaluateTransaction(transaction))