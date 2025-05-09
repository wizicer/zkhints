<!-- | Case                           | input | inv | output | input × output |
| ------------------------------ | ----- | --- | ------ | -------------- |
| Non-zero input                 | 4     | 1/4 | 0      | 0              |
| Zero input                     | 0     | 0   | 1      | 0              |
| Non-zero input (malicious inv) | 4     | 1/5 | 1/5    | 4/5            |
| Zero input (malicious inv)     | 0     | 1/5 | 1      | 0              | -->

<table class="min-w-full border border-gray-300">
  <thead>
    <tr class="bg-gray-100">
      <th class="px-4 py-2 border">Case</th>
      <th class="px-4 py-2 border">input</th>
      <th class="px-4 py-2 border">inv</th>
      <th class="px-4 py-2 border">output</th>
      <th class="px-4 py-2 border">input × output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="px-4 py-2 border">Non-zero input</td>
      <td class="px-4 py-2 border text-center">4</td>
      <td class="px-4 py-2 border text-center">1/4</td>
      <td class="px-4 py-2 border text-center">0</td>
      <td class="px-4 py-2 border text-center">0</td>
    </tr>
    <tr>
      <td class="px-4 py-2 border">Zero input</td>
      <td class="px-4 py-2 border text-center">0</td>
      <td class="px-4 py-2 border text-center">0</td>
      <td class="px-4 py-2 border text-center">1</td>
      <td class="px-4 py-2 border text-center">0</td>
    </tr>
    <tr>
      <td class="px-4 py-2 border"
        >Non-zero input <span class="text-red-600">(malicious inv)</span></td
      >
      <td class="px-4 py-2 border text-center">4</td>
      <td class="px-4 py-2 border text-center"><span class="text-red-600">1/5</span></td>
      <td class="px-4 py-2 border text-center">1/5</td>
      <td class="px-4 py-2 border text-center"><span class="text-red-600">4/5</span></td>
    </tr>
    <tr>
      <td class="px-4 py-2 border"
        >Zero input <span class="text-red-600">(malicious inv)</span></td
      >
      <td class="px-4 py-2 border text-center">0</td>
      <td class="px-4 py-2 border text-center"><span class="text-red-600">1/5</span></td>
      <td class="px-4 py-2 border text-center">1</td>
      <td class="px-4 py-2 border text-center"><span class="text-green-600">0</span></td>
    </tr>
  </tbody>
</table>
